import type { WrappedEvent } from '@bimeister/event-bus.internal';
import type { Observable, OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * @description
 * Passes only events that are direct children to initial event.
 * Initial event is excluded.
 */
export function filterDirectChildrenOf(initialEvent: WrappedEvent): OperatorFunction<WrappedEvent, WrappedEvent> {
  return (source: Observable<WrappedEvent>): Observable<WrappedEvent> =>
    source.pipe(filter((wrappedEvent: WrappedEvent) => wrappedEvent.isChildOf(initialEvent)));
}
