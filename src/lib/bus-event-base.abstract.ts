import { DispatchInputBase } from '../internal/classes/dispatch-input-base.abstract';
import { BusErrorEventBase } from './bus-error-event-base.abstract';

export abstract class BusEventBase<T = any> extends DispatchInputBase<T> {
  constructor() {
    super();
  }

  public getError?(): BusErrorEventBase<T>;
}
