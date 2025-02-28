import type { Provider } from '@nestjs/common/interfaces/modules/provider.interface';
import type { Injector } from './Trace/Injectors/Injector';

export type OpenTelemetryModuleConfig = Provider<Injector>[];
