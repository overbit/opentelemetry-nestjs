import { NodeSDKConfiguration } from '@opentelemetry/sdk-node';

export interface TracingConfig extends Partial<NodeSDKConfiguration> {
  serviceName: string;
}
