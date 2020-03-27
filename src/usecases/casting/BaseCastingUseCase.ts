import CastingEntity from '@/entities/Casting';
import ErrorService from '@/services/ErrorService';

export interface IBaseCastingUseCase {
  casting: CastingEntity;
  errorService: ErrorService;
}
