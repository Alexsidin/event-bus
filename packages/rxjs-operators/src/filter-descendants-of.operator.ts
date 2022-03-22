import type { WrappedEvent } from '@bimeister/event-bus.internal';
import type { Observable, OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

/**
 * @description
 * Passes only events that are descendant to initial event.
 * All children from all generations are included.
 * Initial event is excluded.
 */
export function filterDescendantsOf(initialEvent: WrappedEvent): OperatorFunction<WrappedEvent, WrappedEvent> {
  return (source: Observable<WrappedEvent>): Observable<WrappedEvent> =>
    source.pipe(filter((wrappedEvent: WrappedEvent) => wrappedEvent.isDescendantOf(initialEvent)));
}
