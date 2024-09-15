import equipmentsMock from '@data/equipment.json';
import equipmentModelsMock from '@data/equipmentModel.json';
import equipmentPositionHistoryMock from '@data/equipmentPositionHistory.json';
import equipmentStateMock from '@data/equipmentState.json';
import equipmentStateHistoryMock from '@data/equipmentStateHistory.json';

import type {
  EquipmentFromAPI,
  EquipmentModelFromAPI,
  EquipmentPositionHistoryFromAPI,
  EquipmentStateFromAPI,
  EquipmentStateHistoryFromAPI
} from '@/services/types';

const arrayToObj = <T extends { equipmentId: string }>(array: T[]): Record<string, T> =>
  array.reduce<Record<string, T>>((obj, item) => {
    obj[item.equipmentId] = item;
    return obj;
  }, {});

const equipmentsApiService = {
  getEquipments: async (): Promise<EquipmentFromAPI[]> => {
    const response = equipmentsMock;

    return Promise.resolve(response);
  },

  getEquipmentModels: async (): Promise<EquipmentModelFromAPI[]> => {
    const response = equipmentModelsMock;

    return Promise.resolve(response);
  },

  getEquipmentPositionHistory: async (): Promise<
    Record<string, EquipmentPositionHistoryFromAPI>
  > => {
    const response = arrayToObj(equipmentPositionHistoryMock);

    return Promise.resolve(response);
  },

  getEquipmentState: async (): Promise<EquipmentStateFromAPI[]> => {
    const response = equipmentStateMock as EquipmentStateFromAPI[];

    return Promise.resolve(response);
  },

  getEquipmentStateHistory: async (): Promise<Record<string, EquipmentStateHistoryFromAPI>> => {
    const response = arrayToObj(equipmentStateHistoryMock);

    return Promise.resolve(response);
  }
};

export { equipmentsApiService };