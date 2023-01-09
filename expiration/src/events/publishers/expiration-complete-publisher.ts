import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@babtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
