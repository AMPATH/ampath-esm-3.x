// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import React, { createContext, useContext, useState, ReactNode, FC } from 'react';

interface SelectedLocationsContextType {
  selectedLocations: any;
  setSelectedLocations: React.Dispatch<React.SetStateAction<any>>;
}

const SelectedLocationsContext = createContext<SelectedLocationsContextType | undefined>(undefined);

export const useSelectedLocations = (): SelectedLocationsContextType => {
  const context = useContext(SelectedLocationsContext);
  if (!context) {
    throw new Error('useSelectedLocations must be used within a SelectedLocationsProvider');
  }
  return context;
};

interface SelectedLocationsProviderProps {
  children: ReactNode;
}

export const SelectedLocationsProvider: FC<SelectedLocationsProviderProps> = ({ children }) => {
  const [selectedLocations, setSelectedLocations] = useState<any>();

  return (
    <SelectedLocationsContext.Provider value={{ selectedLocations, setSelectedLocations }}>
      {children}
    </SelectedLocationsContext.Provider>
  );
};
