import React, { useCallback, useRef, useState } from 'react';
import styles from './add-billing-tariffs-service.scss';
import {
  Form,
  Button,
  TextInput,
  ComboBox,
  Dropdown,
  Layer,
  InlineLoading,
  Search,
  Tile,
  FormLabel,
  NumberInput,
} from '@carbon/react';
import { useTranslation } from 'react-i18next';
import {
  createBillableService,
  useConceptsSearch,
  usePaymentModes,
  useServiceTypes,
} from '../billable-service.resource';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { Add, TrashCan, WarningFilled } from '@carbon/react/icons';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { navigate, showSnackbar, useDebounce, useLayoutType } from '@openmrs/esm-framework';
import { type ServiceConcept } from '../../types';
import { extractErrorMessagesFromResponse } from '../../utils';

const servicePriceSchema = z.object({
  paymentMode: z.string({ required_error: 'Payment method is required' }),
  price: z
    .string()
    .refine((value) => !isNaN(Number(value)), 'Value must be a number')
    .refine((value) => parseInt(value) > 0, 'Price should be a number more than zero')
    .refine((value) => !!value, 'Price is required'),
});

const paymentFormSchema = z.object({
  payment: z.array(servicePriceSchema).min(1, 'At least one payment method is required'),
  serviceName: z.string({
    required_error: 'Service name is required',
  }),
  shortName: z.string({ required_error: 'A valid short name is required.' }),
  serviceTypeName: z.string({ required_error: 'A service type is required' }),
  concept: z.string({ required_error: 'Concept search is required.' }),
});

type FormData = z.infer<typeof paymentFormSchema>;
const DEFAULT_PAYMENT_OPTION = { paymentMode: '', price: '1' };

const AddTariffsService: React.FC = () => {
  const { t } = useTranslation();

  const { paymentModes, isLoading: isLoadingPaymentModes } = usePaymentModes();
  const { serviceTypes, isLoading: isLoadingServicesTypes } = useServiceTypes();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'all',
    defaultValues: {},
    resolver: zodResolver(paymentFormSchema),
  });

  const { fields, remove, append } = useFieldArray({ name: 'payment', control: control });

  const handleAppendPaymentMode = useCallback(() => append(DEFAULT_PAYMENT_OPTION), [append]);
  const handleRemovePaymentMode = useCallback((index) => remove(index), [remove]);

  const isTablet = useLayoutType() === 'tablet';
  const searchInputRef = useRef(null);
  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value);

  const [selectedConcept, setSelectedConcept] = useState<ServiceConcept>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm);
  const { searchResults, isSearching } = useConceptsSearch(debouncedSearchTerm);

  const handleConceptChange = useCallback((selectedConcept: ServiceConcept) => {
    setSelectedConcept(selectedConcept);
  }, []);

  const handleNavigateToServiceDashboard = () =>
    navigate({
      to: window.getOpenmrsSpaBase() + 'billable-services',
    });

  const onSubmit = (data: FormData) => {
    const payload: any = {};

    let servicePrices = data.payment.map((element) => {
      return {
        name: paymentModes.filter((p) => p.uuid === element.paymentMode)[0].name,
        price: element.price,
        paymentMode: element.paymentMode,
      };
    });

    payload.name = data.serviceName;
    payload.shortName = data.shortName;
    payload.serviceType = data.serviceTypeName;
    payload.servicePrices = servicePrices;
    payload.serviceStatus = 'ENABLED';
    payload.concept = selectedConcept?.concept?.uuid;

    createBillableService(payload).then(
      (resp) => {
        showSnackbar({
          title: t('billableService', 'Billable service'),
          subtitle: 'Billable service created successfully',
          kind: 'success',
          isLowContrast: true,
          timeoutInMs: 3000,
        });
        handleNavigateToServiceDashboard();
      },
      (error) => {
        showSnackbar({
          title: 'Error adding billable service',
          kind: 'error',
          subtitle: extractErrorMessagesFromResponse(error.responseBody),
          isLowContrast: true,
        });
      },
    );
  };

  if (isLoadingServicesTypes || isLoadingPaymentModes) {
    return (
      <div className={styles.searchWrapper}>
        <InlineLoading className={styles.loader} description={t('searching', 'Searching') + '...'} />
      </div>
    );
  }

  return (
    <Form className={styles.form}>
      <h4 className={styles.subTitle}>{t('addTariffsServices', 'Add Insurance Tariffs')}</h4>

      <section className={styles.secondSection}>
        <div className={styles.serviceName}>
          <Controller
            control={control}
            name="serviceTypeName"
            render={({ field }) => (
              <ComboBox
                id="serviceType"
                items={serviceTypes ?? []}
                titleText={t('availableTariffs', 'Available Tariffs')}
                itemToString={(item: { display: string }) => (item ? item.display : '')}
                placeholder="Select service type"
                required
                {...field}
                onChange={({ selectedItem }) => field.onChange(selectedItem ? selectedItem.display : '')}
                invalidText={errors.serviceTypeName?.message || ''}
                invalid={!!errors.serviceTypeName}
              />
            )}
          />
        </div>
      </section>

      <section>
        <Button kind="secondary" onClick={handleNavigateToServiceDashboard}>
          {t('cancel', 'Cancel')}
        </Button>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          {t('addTariffsave', 'Add Tariff')}
        </Button>
      </section>
    </Form>
  );
};

function ResponsiveWrapper({ children, isTablet }: { children: React.ReactNode; isTablet: boolean }) {
  return isTablet ? <Layer>{children} </Layer> : <>{children}</>;
}

export default AddTariffsService;
