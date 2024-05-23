export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTimeOffset: string;
  Decimal: number;
  Guid: any;
  UInt: any;
};

/** An address expressed using postal conventions (as opposed to GPS or other location definition formats). This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery. There are a variety of postal address formats defined around the world. */
export type Address = {
  /** Name of city, town etc. */
  city?: Maybe<Scalars['String']>;
  /** Country (e.g. can be ISO 3166 2 or 3 letter code). */
  country?: Maybe<Scalars['String']>;
  /** District name (aka county). */
  district?: Maybe<Scalars['String']>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Street name, number, direction & P.O. Box etc. This repeating element order: The order in which lines should appear in an address label. */
  line?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Time period when address was/is in use. */
  period?: Maybe<Period>;
  /** Postal code for area. */
  postalCode?: Maybe<Scalars['String']>;
  /** Sub-unit of country (abbreviations ok). */
  state?: Maybe<Scalars['String']>;
  /** Text representation of the address. */
  text?: Maybe<Scalars['String']>;
  /** http://hl7.org/fhir/stu3/valueset-address-type.html */
  type?: Maybe<AddressTypeCode>;
  /** http://hl7.org/fhir/stu3/valueset-address-use.html */
  use?: Maybe<AddressUseCode>;
};

/** http://hl7.org/fhir/stu3/valueset-address-type.html */
export enum AddressTypeCode {
  Both = 'BOTH',
  Physical = 'PHYSICAL',
  Postal = 'POSTAL'
}

/** http://hl7.org/fhir/stu3/valueset-address-use.html */
export enum AddressUseCode {
  Home = 'HOME',
  Old = 'OLD',
  Temp = 'TEMP',
  Work = 'WORK'
}

/** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AdministrativeGender-1l */
export enum AdministrativeGenderCode {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
  Unknown = 'UNKNOWN'
}

/** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
export type AllergyIntolerance = {
  /** Date record was believed accurate. */
  assertedDate?: Maybe<PartialDateTime>;
  /** Source of the information about the allergy. */
  asserter?: Maybe<ResourceReference>;
  /** http://hl7.org/fhir/stu3/valueset-allergy-intolerance-category.html */
  category?: Maybe<Array<Maybe<AllergyIntoleranceCategoryCode>>>;
  /** http://hl7.org/fhir/stu3/valueset-allergy-clinical-status.html */
  clinicalStatus?: Maybe<AllergyIntoleranceClinicalStatusCode>;
  /** http://hl7.org/fhir/stu3/valueset-allergyintolerance-code.html */
  code?: Maybe<CodeableConcept>;
  /** http://hl7.org/fhir/stu3/valueset-allergy-intolerance-criticality.html */
  criticality?: Maybe<AllergyIntoleranceCriticalityCode>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Date(/time) of last known occurrence of a reaction. */
  lastOccurrence?: Maybe<PartialDateTime>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** Additional text not captured in other fields. */
  note?: Maybe<Array<Maybe<Annotation>>>;
  /** When allergy or intolerance was identified. */
  onSet?: Maybe<AllergyIntoleranceOnSet>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** Adverse Reaction Events linked to exposure to substance. */
  reaction?: Maybe<Array<Maybe<AllergyIntoleranceReaction>>>;
  /** Who recorded the sensitivity. */
  recorder?: Maybe<ResourceReference>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
  /** http://hl7.org/fhir/stu3/valueset-allergy-intolerance-type.html */
  type?: Maybe<AllergyIntoleranceTypeCode>;
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AllergyVerificationStatus-1 */
  verificationStatus: AllergyIntoleranceVerificationStatusCode;
};

export enum AllergyIntoleranceCategoryCode {
  Biologic = 'BIOLOGIC',
  Environment = 'ENVIRONMENT',
  Food = 'FOOD',
  Medication = 'MEDICATION'
}

export enum AllergyIntoleranceClinicalStatusCode {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Resolved = 'RESOLVED'
}

/** A continuation of Allergy Intolerance resources. */
export type AllergyIntoleranceContinuationType = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of Allergy Intolerance resources. */
  resources: Array<Maybe<AllergyIntolerance>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

export enum AllergyIntoleranceCriticalityCode {
  High = 'HIGH',
  Low = 'LOW',
  UnableToAssess = 'UNABLE_TO_ASSESS'
}

/** When allergy or intolerance was identified. */
export type AllergyIntoleranceOnSet = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  onSetAge?: Maybe<Quantity>;
  onSetDateTime?: Maybe<PartialDateTime>;
  onSetPeriod?: Maybe<Period>;
  onSetRange?: Maybe<Range>;
  onSetString?: Maybe<Scalars['String']>;
};

/** Adverse Reaction Events linked to exposure to substance. */
export type AllergyIntoleranceReaction = {
  /** Description of the event as a whole. */
  description?: Maybe<Scalars['String']>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AllergyExposureRoute-1 */
  exposureRoute?: Maybe<CodeableConcept>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AllergyManifestation-1 */
  manifestation: Array<Maybe<CodeableConcept>>;
  /** Additional text not captured in other fields. */
  note?: Maybe<Array<Maybe<Annotation>>>;
  /** Date(/time) when manifestations showed. */
  onSet?: Maybe<PartialDateTime>;
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ReactionEventSeverity-1 */
  severity?: Maybe<AllergyIntoleranceReactionSeverityCode>;
  /** http://hl7.org/fhir/stu3/valueset-substance-code.html */
  substance?: Maybe<CodeableConcept>;
};

export enum AllergyIntoleranceReactionSeverityCode {
  Mild = 'MILD',
  Moderate = 'MODERATE',
  Severe = 'SEVERE'
}

export enum AllergyIntoleranceTypeCode {
  Allergy = 'ALLERGY',
  Intolerance = 'INTOLERANCE'
}

export enum AllergyIntoleranceVerificationStatusCode {
  Confirmed = 'CONFIRMED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Refuted = 'REFUTED',
  Unconfirmed = 'UNCONFIRMED'
}

/** A text note which also contains information about who made the statement and when. */
export type Annotation = {
  /** Individual responsible for the annotation. */
  author?: Maybe<ResourceReference>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The annotation - text content. */
  text: Scalars['String'];
  /** When the annotation was made. */
  time?: Maybe<PartialDateTime>;
};

/** A record of an event among a patient or practitioner for a specific date/time. */
export type Appointment = {
  appointmentType?: Maybe<CodeableConcept>;
  basedOn?: Maybe<Array<Maybe<ResourceReference>>>;
  cancellationReason?: Maybe<CodeableConcept>;
  comment?: Maybe<Scalars['String']>;
  created?: Maybe<PartialDateTime>;
  description?: Maybe<Scalars['String']>;
  end?: Maybe<PartialDateTime>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Metadata about the resource. */
  metadata: Metadata;
  minutesDuration?: Maybe<Scalars['UInt']>;
  participant?: Maybe<Array<Maybe<AppointmentParticipant>>>;
  patientInstruction?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['UInt']>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  reasonCode?: Maybe<CodeableConcept>;
  reasonReference?: Maybe<ResourceReference>;
  requestedPeriod?: Maybe<Array<Maybe<Period>>>;
  serviceCategory?: Maybe<CodeableConcept>;
  serviceType?: Maybe<CodeableConcept>;
  slot?: Maybe<Array<Maybe<Slot>>>;
  specialty?: Maybe<CodeableConcept>;
  start?: Maybe<PartialDateTime>;
  status?: Maybe<AppointmentStatusCode>;
  supportingInformation?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
};

/** List of participants involved in the appointment. */
export type AppointmentParticipant = {
  actor?: Maybe<ResourceReference>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  period?: Maybe<Period>;
  required?: Maybe<AppointmentParticipantRequiredCode>;
  status?: Maybe<AppointmentParticipantStatusCode>;
  type?: Maybe<Array<Maybe<CodeableConcept>>>;
};

export enum AppointmentParticipantRequiredCode {
  InformationOnly = 'INFORMATION_ONLY',
  Optional = 'OPTIONAL',
  Required = 'REQUIRED'
}

export enum AppointmentParticipantStatusCode {
  Accepted = 'ACCEPTED',
  Declined = 'DECLINED',
  Draft = 'DRAFT',
  Failed = 'FAILED'
}

export enum AppointmentStatusCode {
  Abandoned = 'ABANDONED',
  Accepted = 'ACCEPTED',
  Arrived = 'ARRIVED',
  Complete = 'COMPLETE',
  Draft = 'DRAFT',
  Error = 'ERROR',
  Partial = 'PARTIAL',
  Proposed = 'PROPOSED',
  Suspended = 'SUSPENDED',
  WaitListed = 'WAIT_LISTED'
}

/** Content in a format defined elsewhere. */
export type Attachment = {
  /** Mime type of the content, with charset etc. */
  contentType?: Maybe<Scalars['String']>;
  /** Date attachment was first created. */
  creation?: Maybe<PartialDateTime>;
  /** The attachment data. */
  data?: Maybe<Scalars['String']>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Hash of the data (sha-1, base64ed). */
  hash?: Maybe<Scalars['String']>;
  /** Human language of the content (BCP-47). */
  language?: Maybe<Scalars['String']>;
  /** Number of bytes of content (if url provided). */
  size?: Maybe<Scalars['Int']>;
  /** Label to display in place of the data. */
  title?: Maybe<Scalars['String']>;
  /** Uri where the data can be found. */
  url?: Maybe<Scalars['String']>;
};

/** https://www.hl7.org/fhir/R4/auditevent.html */
export type AuditEvent = {
  /** Type of action performed during the event. */
  action?: Maybe<AuditEventAction>;
  /** Type of action performed during the event. */
  agent: Array<Maybe<AuditEventAgent>>;
  /** Data or objects used. */
  entity?: Maybe<Array<Maybe<AuditEventEntity>>>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** Whether the event succeeded or failed. */
  outcome?: Maybe<AuditEventOutcome>;
  /** Description of the event outcome. */
  outcomeDesc?: Maybe<Scalars['String']>;
  /** When the activity occurred. */
  period?: Maybe<Period>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** The purposeOfUse of the event. */
  purposeOfEvent?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** Time when the event was recorded. */
  recorded: PartialDateTime;
  /** Audit Event Reporter. */
  source: AuditEventSource;
  /** More specific type/id for the event. */
  subType?: Maybe<Array<Maybe<Coding>>>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
  /** Type/identifier of event. */
  type: Coding;
};

export enum AuditEventAction {
  /** C */
  Create = 'CREATE',
  /** D */
  Delete = 'DELETE',
  /** E */
  Execute = 'EXECUTE',
  /** R */
  Read = 'READ',
  /** U */
  Update = 'UPDATE'
}

/** Actor involved in the event. */
export type AuditEventAgent = {
  /** Alternative User identity. */
  altId?: Maybe<Scalars['String']>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Where. */
  location?: Maybe<ResourceReference>;
  /** Type of media. */
  media?: Maybe<Coding>;
  /** Human friendly name for the agent. */
  name?: Maybe<Scalars['String']>;
  /** Logical network location for application activity. */
  network?: Maybe<AuditEventAgentNetwork>;
  /** Policy that authorized event. */
  policy?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Reason given for this user. */
  purposeOfUse?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** Whether user is initiator. */
  requestor: Scalars['Boolean'];
  /** Agent role in the event. */
  role?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** How agent participated. */
  type?: Maybe<CodeableConcept>;
  /** Identifier of who. */
  who?: Maybe<ResourceReference>;
};

/** Logical network location for application activity. */
export type AuditEventAgentNetwork = {
  /** Identifier for the network access point of the user device. */
  address?: Maybe<Scalars['String']>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The type of network access point. */
  type?: Maybe<AuditEventAgentNetworkType>;
};

export enum AuditEventAgentNetworkType {
  EmailAddress = 'EMAIL_ADDRESS',
  IpAddress = 'IP_ADDRESS',
  MachineName = 'MACHINE_NAME',
  TelephoneNumber = 'TELEPHONE_NUMBER',
  Uri = 'URI'
}

/** A continuation of Task resources. */
export type AuditEventContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of Audit Event resources. */
  resources: Array<Maybe<AuditEvent>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

/** Data or objects used. */
export type AuditEventEntity = {
  /** Alternative User identity. */
  description?: Maybe<Scalars['String']>;
  /** Additional Information about the entity. */
  detail?: Maybe<Array<Maybe<AuditEventEntityDetail>>>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Life-cycle stage for the entity. */
  lifecycle?: Maybe<Coding>;
  /** Descriptor for entity. */
  name?: Maybe<Scalars['String']>;
  /** Query parameters. */
  query?: Maybe<Scalars['String']>;
  /** What role the entity played. */
  role?: Maybe<Coding>;
  /** Security labels on the entity. */
  securityLabel?: Maybe<Array<Maybe<Coding>>>;
  /** Type of entity involved. */
  type?: Maybe<Coding>;
  /** Specific instance of resource. */
  what?: Maybe<ResourceReference>;
};

/** Additional Information about the entity. */
export type AuditEventEntityDetail = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Name of the property. */
  type?: Maybe<Scalars['String']>;
  /** Property value. */
  value?: Maybe<Scalars['String']>;
};

export enum AuditEventOutcome {
  MajorFailure = 'MAJOR_FAILURE',
  MinorFailure = 'MINOR_FAILURE',
  SeriousFailure = 'SERIOUS_FAILURE',
  Success = 'SUCCESS'
}

/** Audit Event Reporter. */
export type AuditEventSource = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The identity of source detecting the event. */
  observer: ResourceReference;
  /** Logical source location within the enterprise. */
  site?: Maybe<Scalars['String']>;
  /** The type of source where event originated. */
  type?: Maybe<Array<Maybe<Coding>>>;
};

/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export type CarePlan = {
  /** Action to occur as part of plan. */
  activity?: Maybe<Array<Maybe<CarePlanActivity>>>;
  /** Health issues this plan addresses. */
  addresses?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Who is responsible for contents of the plan. Note: This is a list type to be backwards compatible with FHIR R4 but should only contain one entry if possible */
  author?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Fulfills care plan. */
  basedOn?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Who's involved in plan? */
  careTeam?: Maybe<Array<Maybe<ResourceReference>>>;
  /** http://hl7.org/fhir/stu3/valueset-care-plan-category.html */
  category?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** Associated Goals and their current status */
  containedGoals?: Maybe<Array<Maybe<Goal>>>;
  /** Who provided the content of the care plan */
  contributor?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Date record was first recorded */
  created?: Maybe<PartialDateTime>;
  /** Summary of nature of plan. */
  description?: Maybe<Scalars['String']>;
  /** Encounter created as part of. */
  encounter?: Maybe<ResourceReference>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Desired outcome of plan. */
  goal?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  /** Instantiates FHIR protocol or definition. */
  instantiatesCanonical?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Instantiates external protocol or definition. */
  instantiatesUri?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** http://hl7.org/fhir/stu3/valueset-care-plan-intent.html */
  intent: CarePlanIntentCode;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** Comments about the plan. */
  note?: Maybe<Array<Maybe<Annotation>>>;
  /** Part of referenced CarePlan. */
  partOf?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Time period plan covers. */
  period?: Maybe<Period>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** CarePlan replaced by this CarePlan. */
  replaces?: Maybe<Array<Maybe<ResourceReference>>>;
  /** http://hl7.org/fhir/stu3/valueset-care-plan-status.html */
  status: CarePlanStatusCode;
  /** Information considered as part of plan. */
  supportingInfo?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
  /** Human-friendly name for the CarePlan. */
  title?: Maybe<Scalars['String']>;
};

/** Action to occur as part of plan. */
export type CarePlanActivity = {
  /** In-line definition of activity. */
  detail?: Maybe<CarePlanActivityDetail>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** http://hl7.org/fhir/stu3/valueset-care-plan-activity-outcome.html */
  outcomeCodeableConcept?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** Appointment, Encounter, Procedure, etc. */
  outcomeReference?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Comments about the activity status/progress. */
  progress?: Maybe<Array<Maybe<Annotation>>>;
  /** Activity details defined in specific resource. */
  reference?: Maybe<ResourceReference>;
};

/** Actions taken as part of the activity */
export type CarePlanActivityActionInput = {
  id: Scalars['String'];
  label: Scalars['String'];
};

/** In-line definition of activity. */
export type CarePlanActivityDetail = {
  /** http://hl7.org/fhir/stu3/valueset-care-plan-activity.html */
  code?: Maybe<CodeableConcept>;
  /** How to consume/day? */
  dailyAmount?: Maybe<Quantity>;
  /** Extra info describing activity to perform. */
  description?: Maybe<Scalars['String']>;
  /** If true, activity is prohibiting action. */
  doNotPerform?: Maybe<Scalars['Boolean']>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Goals this activity relates to. */
  goal?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Instantiates FHIR protocol or definition. */
  instantiatesCanonical?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Instantiates external protocol or definition. */
  instantiatesUri?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** http://hl7.org/fhir/stu3/valueset-care-plan-activity-category.html */
  kind?: Maybe<CarePlanActivityDetailKindCode>;
  /** Where it should happen. */
  location?: Maybe<ResourceReference>;
  /** Who will be responsible? */
  performer?: Maybe<Array<Maybe<ResourceReference>>>;
  /** What is to be administered/supplied. */
  product?: Maybe<CarePlanActivityDetailProduct>;
  /** How much to administer/supply/consume. */
  quantity?: Maybe<Quantity>;
  /** http://hl7.org/fhir/stu3/valueset-activity-reason.html */
  reasonCode?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** Condition triggering need for activity. */
  reasonReference?: Maybe<Array<Maybe<ResourceReference>>>;
  /** http://hl7.org/fhir/stu3/valueset-care-plan-activity-status.html */
  status: CarePlanActivityDetailStatusCode;
  /** Reason for current status. */
  statusReason?: Maybe<CodeableConcept>;
};

export enum CarePlanActivityDetailKindCode {
  Appointment = 'APPOINTMENT',
  CommunicationRequest = 'COMMUNICATION_REQUEST',
  DeviceRequest = 'DEVICE_REQUEST',
  MedicationRequest = 'MEDICATION_REQUEST',
  NutritionOrder = 'NUTRITION_ORDER',
  ServiceRequest = 'SERVICE_REQUEST',
  Task = 'TASK',
  VisionPrescription = 'VISION_PRESCRIPTION'
}

/** What is to be administered/supplied. */
export type CarePlanActivityDetailProduct = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** What is to be administered/supplied. */
  productCodeableConcept?: Maybe<CodeableConcept>;
  /** What is to be administered/supplied. */
  productReference?: Maybe<ResourceReference>;
};

export enum CarePlanActivityDetailStatusCode {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  EnteredInError = 'ENTERED_IN_ERROR',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED',
  OnHold = 'ON_HOLD',
  Scheduled = 'SCHEDULED',
  Stopped = 'STOPPED',
  Unknown = 'UNKNOWN'
}

/** Activity performed on the care plan */
export type CarePlanActivityInput = {
  actions?: Maybe<Array<Maybe<CarePlanActivityActionInput>>>;
  goalId?: Maybe<Scalars['String']>;
  /** Provide a unique identifier so you can find the activity in the response object */
  id: Scalars['Guid'];
  itemId: Scalars['String'];
  label: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  outcome?: Maybe<CodingInput>;
  performed: Scalars['DateTimeOffset'];
  performedOn?: Maybe<Array<Maybe<CodingInput>>>;
  requestCountersignature?: Maybe<Scalars['Boolean']>;
  templateName: Scalars['String'];
};

/** A continuation of Care Plan resources. */
export type CarePlanContinuationType = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of Care Plan resources. */
  resources: Array<Maybe<CarePlan>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

/** Record progress against a care plan through interventions and goals */
export type CarePlanDocumentInput = {
  activities?: Maybe<Array<Maybe<CarePlanActivityInput>>>;
  carePlanId: Scalars['Guid'];
  goalEvaluations?: Maybe<Array<Maybe<CarePlanGoalEvaluationInput>>>;
};

/** Goal evaluations from the care plan */
export type CarePlanGoalEvaluationInput = {
  /** Provide a unique identifier so you can find the goal evaluation in the response object */
  id: Scalars['Guid'];
  itemId: Scalars['String'];
  label: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  outcome: CodingInput;
  performed: Scalars['DateTimeOffset'];
  requestCountersignature?: Maybe<Scalars['Boolean']>;
  templateName: Scalars['String'];
};

export enum CarePlanIntentCode {
  Option = 'OPTION',
  Order = 'ORDER',
  Plan = 'PLAN',
  Proposal = 'PROPOSAL'
}

export type CarePlanModelActionInput = {
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  reasonCode?: Maybe<Scalars['String']>;
  reasonText?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CarePlanModelInput = {
  actions?: Maybe<Array<Maybe<CarePlanModelActionInput>>>;
  planDefinitionId?: Maybe<Scalars['Guid']>;
  planDefinitionLabel?: Maybe<Scalars['String']>;
  planDefinitionSeriesId?: Maybe<Scalars['String']>;
  reasonCode?: Maybe<Scalars['String']>;
  reasonText?: Maybe<Scalars['String']>;
  useContexts?: Maybe<Array<Maybe<UsageContextInput>>>;
};

export enum CarePlanStatusCode {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Draft = 'DRAFT',
  EnteredInError = 'ENTERED_IN_ERROR',
  OnHold = 'ON_HOLD',
  Revoked = 'REVOKED',
  Unknown = 'UNKNOWN'
}

export enum ClinicalApprovalStatus {
  Cancelled = 'CANCELLED',
  Expired = 'EXPIRED',
  Requested = 'REQUESTED',
  Reviewed = 'REVIEWED'
}

/** A reference to one or more terminologies or ontologies but may also be defined by the provision of text. */
export type CodeableConcept = {
  /** Code defined by a terminology system. */
  coding?: Maybe<Array<Maybe<Coding>>>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Symbol in syntax defined by the system. */
  text?: Maybe<Scalars['String']>;
};

/** A reference to one or more terminologies or ontologies but may also be defined by the provision of text. */
export type CodeableConceptInput = {
  /** Code defined by a terminology system. */
  coding?: Maybe<Array<Maybe<CodingInput>>>;
  /** Symbol in syntax defined by the system. */
  text?: Maybe<Scalars['String']>;
};

/** A defined concept using a symbol from a code system. */
export type Coding = {
  /** Symbol in syntax defined by the system. */
  code?: Maybe<Scalars['String']>;
  /** Representation defined by the system. */
  display?: Maybe<Scalars['String']>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Identity of the terminology system. */
  system?: Maybe<Scalars['String']>;
  /** Version of the system - if relevant. */
  version?: Maybe<Scalars['String']>;
};

/** A defined concept using a symbol from a code system. */
export type CodingInput = {
  /** Symbol in syntax defined by the system. */
  code?: Maybe<Scalars['String']>;
  /** Representation defined by the system. */
  display?: Maybe<Scalars['String']>;
  /** Identity of the terminology system. */
  system?: Maybe<Scalars['String']>;
  /** Version of the system - if relevant. */
  version?: Maybe<Scalars['String']>;
};

export type Condition = {
  abatement?: Maybe<ConditionAbatement>;
  assertedDate?: Maybe<PartialDateTime>;
  asserter?: Maybe<ConditionAsserter>;
  bodySite?: Maybe<Array<Maybe<CodeableConcept>>>;
  category?: Maybe<Array<Maybe<CodeableConcept>>>;
  clinicalStatus?: Maybe<ConditionClinicalStatus>;
  code?: Maybe<CodeableConcept>;
  context?: Maybe<ResourceReference>;
  evidence?: Maybe<Array<Maybe<ConditionEvidence>>>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  extensionData?: Maybe<Array<Maybe<QuestionnaireResponse>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Metadata about the resource. */
  metadata: Metadata;
  note?: Maybe<Array<Maybe<Annotation>>>;
  onset?: Maybe<ConditionOnset>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  severity?: Maybe<CodeableConcept>;
  stage?: Maybe<ConditionStage>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
  verificationStatus?: Maybe<ConditionVerificationStatus>;
};

export type ConditionAbatement = {
  age?: Maybe<Quantity>;
  dateTime: PartialDateTime;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  period: Period;
};

export enum ConditionAdmissionPeriodType {
  All = 'ALL',
  Current = 'CURRENT',
  Past = 'PAST'
}

export type ConditionAsserter = {
  asserterAddress?: Maybe<Scalars['String']>;
  asserterName?: Maybe<Scalars['String']>;
  asserterType?: Maybe<Scalars['String']>;
  /** Text alternative for the resource. */
  display: Scalars['String'];
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Business identifier for the referenced resource. */
  identifier?: Maybe<Identifier>;
  /** Literal reference, Relative, internal or absolute URL. */
  reference?: Maybe<Scalars['String']>;
  /** Type the reference refers to (e.g. Patient. */
  typeName: Scalars['String'];
};

export enum ConditionClinicalStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Recurrence = 'RECURRENCE',
  Remission = 'REMISSION',
  Resolved = 'RESOLVED'
}

/** A continuation of Condition resources. */
export type ConditionContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of Condition resources. */
  resources: Array<Maybe<Condition>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

export type ConditionEvidence = {
  code?: Maybe<Array<Maybe<CodeableConcept>>>;
  detail?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
};

export type ConditionMinimalInput = {
  assertedDate?: Maybe<PartialDateTimeInput>;
  clinicalStatus?: Maybe<ConditionClinicalStatus>;
  code: CodeableConceptInput;
  extension?: Maybe<Array<Maybe<ExtensionInput>>>;
  id: Scalars['String'];
  onset?: Maybe<ConditionOnsetMinimalInput>;
  verificationStatus?: Maybe<ConditionVerificationStatus>;
};

export type ConditionMinimalInputList = {
  resources: Array<Maybe<ConditionMinimalInput>>;
};

export type ConditionOnset = {
  age?: Maybe<Quantity>;
  dateTime?: Maybe<PartialDateTime>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  period?: Maybe<Period>;
  range?: Maybe<Range>;
  string?: Maybe<Scalars['String']>;
};

export type ConditionOnsetMinimalInput = {
  dateTime: PartialDateTimeInput;
};

export type ConditionStage = {
  assessment?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  summary?: Maybe<CodeableConcept>;
};

export enum ConditionVerificationStatus {
  Confirmed = 'CONFIRMED',
  Differential = 'DIFFERENTIAL',
  EnteredInError = 'ENTERED_IN_ERROR',
  Provisional = 'PROVISIONAL',
  Refuted = 'REFUTED',
  Unknown = 'UNKNOWN'
}

/** The ContactDetail structure defines general contact details. */
export type ContactDetail = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Name of an individual to contact. */
  name?: Maybe<Scalars['String']>;
  /** Contact details for individual or organization. */
  telecom?: Maybe<Array<Maybe<ContactPoint>>>;
};

/** Details for all kinds of technology-mediated contact points for a person or organization, including telephone, email, etc. */
export type ContactPoint = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Time period when name was/is in use. */
  period?: Maybe<Period>;
  /** Specify preferred order of use (1 = highest). */
  rank?: Maybe<Scalars['Int']>;
  /** http://hl7.org/fhir/stu3/valueset-contact-point-system.html */
  system?: Maybe<ContactPointSystemCode>;
  /** http://hl7.org/fhir/stu3/valueset-contact-point-use.html */
  use?: Maybe<ContactPointUseCode>;
  /** The actual contact point details. */
  value?: Maybe<Scalars['String']>;
};

/** http://hl7.org/fhir/stu3/valueset-contact-point-system.html */
export enum ContactPointSystemCode {
  Email = 'EMAIL',
  Fax = 'FAX',
  Other = 'OTHER',
  Pager = 'PAGER',
  Phone = 'PHONE',
  Sms = 'SMS',
  Url = 'URL'
}

/** http://hl7.org/fhir/stu3/valueset-contact-point-use.html */
export enum ContactPointUseCode {
  Home = 'HOME',
  Mobile = 'MOBILE',
  Old = 'OLD',
  Temp = 'TEMP',
  Work = 'WORK'
}

/** Review for a single countersignature. */
export type CountersignatureReviewInputType = {
  approvalId: Scalars['Guid'];
  notes?: Maybe<Scalars['String']>;
  outcome: CodingInput;
  patient: PatientIdentifierInputType;
  templateName: Scalars['String'];
  verificationMethod: VerificationMethod;
};

/** A specific variant of a given dashboard. */
export type DashboardVariant = {
  /** Display name of the dashboard variant. */
  displayName: Scalars['String'];
  /** The logical grouping of the Dashboard Variant. */
  group?: Maybe<Scalars['String']>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Identifier for initial content that can be set for a Dashboard Variant. */
  initialContentId?: Maybe<Scalars['String']>;
  /** Whether the dashboard variant has been marked as a favourite by the user. */
  isFavourite?: Maybe<Scalars['Boolean']>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** The template associated with this Dashboard Variant. */
  template: Scalars['String'];
};

/** A continuation of Dashboard Variant resources. */
export type DashboardVariantContinuationType = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of DashboardVariant resources. */
  resources: Array<Maybe<DashboardVariant>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

/** Provides information on the availability of data from a given Provider for the current User. */
export type DataAvailability = {
  /** The sources of the available data. */
  dataSources?: Maybe<Array<Maybe<Coding>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Metadata about the resource. */
  metadata: Metadata;
};

export enum DataProviderPermission {
  Ehr = 'EHR',
  GpConnect = 'GP_CONNECT',
  Lypft = 'LYPFT',
  Yhcr = 'YHCR'
}

/** The data source profile to apply to the query context. */
export enum DataSourceProfile {
  /** The default profile. */
  Default = 'DEFAULT',
  /** Only include Leeds data for testing our own data provision. */
  LeedsTesting = 'LEEDS_TESTING'
}



export enum DaysOfWeekType {
  /** Friday */
  Fri = 'FRI',
  /** Monday */
  Mon = 'MON',
  /** Saturday */
  Sat = 'SAT',
  /** Sunday */
  Sun = 'SUN',
  /** Thursday */
  Thu = 'THU',
  /** Tuesday */
  Tue = 'TUE',
  /** Wednesday */
  Wed = 'WED'
}


/** The DocumentReference resource is used to describe a document that is made available to a healthcare system. */
export type DocumentReference = {
  /** Who/what authenticated the document. */
  authenticator?: Maybe<ResourceReference>;
  /** Who and/or what authored the document. */
  author?: Maybe<Array<Maybe<DocumentReferenceAuthor>>>;
  /** http://hl7.org/fhir/stu3/valueset-c80-doc-classcodes.html */
  class?: Maybe<CodeableConcept>;
  /** Document referenced. */
  content: Array<Maybe<DocumentReferenceContent>>;
  /** Clinical context of document. */
  context?: Maybe<DocumentReferenceContext>;
  /** Document creation time. */
  created?: Maybe<PartialDateTime>;
  /** Organization which maintains the document. */
  custodian?: Maybe<ResourceReference>;
  /** Human-readable description (title). */
  description?: Maybe<Scalars['String']>;
  /** http://hl7.org/fhir/stu3/valueset-composition-status.html */
  docStatus?: Maybe<DocumentReferenceDocStatusCode>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  /** When this document reference was created. */
  indexed: PartialDateTime;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Master Version Specific Identifier. */
  masterIdentifier?: Maybe<Identifier>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** Relationships to other documents. */
  relatesTo?: Maybe<Array<Maybe<DocumentReferenceRelatesTo>>>;
  /** Document security-tags. */
  securityLabel?: Maybe<Array<Maybe<ResourceReference>>>;
  /** http://hl7.org/fhir/stu3/valueset-document-reference-status.html */
  status: DocumentReferenceStatusCode;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DocumentType-1 */
  type: CodeableConcept;
};

export type DocumentReferenceAuthor = {
  /** Text alternative for the resource. */
  display: Scalars['String'];
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The author's full name */
  fullName: Scalars['String'];
  /** Business identifier for the referenced resource. */
  identifier?: Maybe<Identifier>;
  /** Literal reference, Relative, internal or absolute URL. */
  reference?: Maybe<Scalars['String']>;
  /** The author's specialty (e.g. Oncologist, AHP,..) */
  specialty?: Maybe<Scalars['String']>;
  /** Type the reference refers to (e.g. Patient. */
  typeName: Scalars['String'];
  /** The author's username within the system */
  username: Scalars['String'];
};

/** Document referenced. */
export type DocumentReferenceContent = {
  /** Where to access the document. */
  attachment: Attachment;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Format/content rules for the document. */
  format?: Maybe<Coding>;
};

/** Clinical context of document. */
export type DocumentReferenceContext = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Context of the document content. */
  encounter?: Maybe<DocumentReference>;
  /** Main clinical acts documented. */
  event?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Kind of facility where patient was seen. */
  facilityType?: Maybe<CodeableConcept>;
  /** Time of service that is being documented. */
  period?: Maybe<Period>;
  /** Additional details about where the content was created (e.g. clinical specialty). */
  practiceSetting?: Maybe<CodeableConcept>;
  /** Related identifiers or resources. */
  related?: Maybe<Array<Maybe<DocumentReferenceRelated>>>;
  /** Patient demographics from source. */
  sourcePatientInfo?: Maybe<DocumentReference>;
};

/** A continuation of DocumentReference resources. */
export type DocumentReferenceContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of DocumentReference resources. */
  resources: Array<Maybe<DocumentReference>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

export enum DocumentReferenceDocStatusCode {
  Amended = 'AMENDED',
  Appended = 'APPENDED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Final = 'FINAL',
  Preliminary = 'PRELIMINARY'
}

/** Related identifiers or resources. */
export type DocumentReferenceRelated = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Identifier of related objects or events. */
  identifier?: Maybe<Identifier>;
  /** Related Resource. */
  ref?: Maybe<ResourceReference>;
};

/** Relationships to other documents. */
export type DocumentReferenceRelatesTo = {
  /** http://hl7.org/fhir/stu3/valueset-document-relationship-type.html */
  code: DocumentReferenceRelatesToCode;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Target of the relationship. */
  target: ResourceReference;
};

export enum DocumentReferenceRelatesToCode {
  Appends = 'APPENDS',
  Replaces = 'REPLACES',
  Signs = 'SIGNS',
  Transforms = 'TRANSFORMS'
}

export enum DocumentReferenceStatusCode {
  Current = 'CURRENT',
  EnteredInError = 'ENTERED_IN_ERROR',
  Superseded = 'SUPERSEDED'
}

export enum DosageRelationshipType {
  And = 'AND',
  Or = 'OR',
  Singleline = 'SINGLELINE',
  Then = 'THEN'
}

export type DosageType = {
  additionalInstruction?: Maybe<Array<Maybe<CodeableConcept>>>;
  asNeededBoolean?: Maybe<Scalars['Boolean']>;
  asNeededCodeableConcept?: Maybe<CodeableConcept>;
  doseQuantity?: Maybe<Quantity>;
  doseRange?: Maybe<Range>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  maxDosePerAdministration?: Maybe<Quantity>;
  maxDosePerPeriod?: Maybe<Range>;
  method?: Maybe<CodeableConcept>;
  patientInstruction?: Maybe<Scalars['String']>;
  rateQuantity?: Maybe<Quantity>;
  rateRange?: Maybe<Range>;
  rateRatio?: Maybe<Ratio>;
  route?: Maybe<CodeableConcept>;
  sequence?: Maybe<Scalars['Int']>;
  site?: Maybe<CodeableConcept>;
  text?: Maybe<Scalars['String']>;
  timing?: Maybe<TimingType>;
};

/** Queries the LTHT EHR. */
export type Ehr = {
  /** Active Care Plans */
  activeCarePlans?: Maybe<CarePlanContinuationType>;
  /** Admissions */
  admissions?: Maybe<EncounterContinuation>;
  /** Allergy/Intolerance Detail */
  allergyIntolerance?: Maybe<AllergyIntolerance>;
  /** Allergies and Intolerances */
  allergyIntolerances?: Maybe<AllergyIntoleranceContinuationType>;
  /** Appointment Detail */
  appointment?: Maybe<Appointment>;
  /** Timeline Events */
  auditEvents?: Maybe<AuditEventContinuation>;
  /** Available Care Plans */
  availableCarePlanDefinitionsForPatient?: Maybe<PlanDefinitionContinuationType>;
  /** Gets the care plan associated with an activity or goal evaluation */
  carePlan?: Maybe<CarePlan>;
  /** Care Plan Definition Detail */
  carePlanDefinition?: Maybe<PlanDefinition>;
  /** Care Plan Definition Usage Contexts */
  carePlanDefinitionUseContexts?: Maybe<Array<Maybe<TerminologyItem>>>;
  /** Care Plan Definitions */
  carePlanDefinitions?: Maybe<PlanDefinitionContinuationType>;
  /** Active Care Plan Summaries */
  carePlanSummaries?: Maybe<Array<Maybe<CarePlan>>>;
  /** Clinical data history for a patient by a user */
  clinicalDataHistoryForPatientByUser?: Maybe<QuestionnaireResponseContinuation>;
  /** Clinical data history for user */
  clinicalDataHistoryForUser?: Maybe<QuestionnaireResponseContinuation>;
  /** Get template groups built from the history of an author's submissions. */
  clinicalDataHistoryTemplateGroupsForAuthor?: Maybe<TemplateGroupContinuationType>;
  /** Get template groups built from the history of an author's submissions for a given patient. */
  clinicalDataHistoryTemplateGroupsForPatientByAuthor?: Maybe<TemplateGroupContinuationType>;
  /** Get template groups built from the history of countersignature requests of a signatory for a given patient. */
  clinicalDataHistoryTemplateGroupsForPatientBySignatory?: Maybe<TemplateGroupContinuationType>;
  /** Get template groups built from the history of countersignature requests of a signatory. */
  clinicalDataHistoryTemplateGroupsForSignatory?: Maybe<TemplateGroupContinuationType>;
  /** Diagnosis Detail */
  condition?: Maybe<Condition>;
  /** Diagnosis */
  conditions?: Maybe<ConditionContinuation>;
  /** Get a countersignature request by ID */
  countersignatureRequest?: Maybe<QuestionnaireResponse>;
  /** Get countersignature requests raised against a specific document */
  countersignatureRequestsForDocument?: Maybe<ProvenanceContinuationType>;
  /** Gets all open countersignature requests for the user that match the provided filters */
  countersignatureRequestsForUser?: Maybe<QuestionnaireResponseContinuation>;
  /** Gets all open countersignature requests for the user on a patient that match the provided filters */
  countersignatureRequestsForUserOnPatient?: Maybe<QuestionnaireResponseContinuation>;
  /** Gets all dashboard variants available for a given dashboard. */
  dashboardVariants?: Maybe<DashboardVariantContinuationType>;
  /** Documents */
  documentReferences?: Maybe<DocumentReferenceContinuation>;
  /** Alerts */
  flags?: Maybe<Array<Maybe<Flag>>>;
  /** All PatientGroups a certain patient belongs to */
  groupsForPatient?: Maybe<Array<Maybe<Group>>>;
  /** Guidance */
  guidance?: Maybe<Array<Maybe<Guidance>>>;
  /** Medication Detail */
  medication?: Maybe<MedicationRequest>;
  /** Medications */
  medications?: Maybe<MedicationRequestContinuationType>;
  /** Patient Demographics */
  patient?: Maybe<Patient>;
  /** Patient Group and Membership */
  patientGroup?: Maybe<Group>;
  /** Patient Search by Free Text */
  patientSearchByFreeText?: Maybe<PatientContinuationType>;
  /** Patient Search by Search Criteria */
  patientSearchBySearchCriteria?: Maybe<PatientContinuationType>;
  /** Questionnaire Detail */
  questionnaireResponseByInstance?: Maybe<QuestionnaireResponse>;
  /** Questionnaire Detail */
  questionnaireResponseLastCompleted?: Maybe<QuestionnaireResponse>;
  /** Questionnaires */
  questionnaireResponsesBySet?: Maybe<QuestionnaireResponseContinuation>;
  /** Diagnosis */
  relevantConditions?: Maybe<ConditionContinuation>;
  /** Summary View Definition Data */
  summaryViewDefinition?: Maybe<Questionnaire>;
  /** Summary View Entries Data */
  summaryViewEntries?: Maybe<QuestionnaireResponseContinuation>;
  /** Tasks */
  tasks?: Maybe<TaskContinuation>;
  /** Returns the available CDS extension template for a given base template and value */
  templateExtension?: Maybe<Questionnaire>;
  /** Gets template details such as display name and approval info. */
  templateMetadata?: Maybe<Questionnaire>;
  /** Terminology */
  terminologyItems?: Maybe<TerminologyItemContinuation>;
};


/** Queries the LTHT EHR. */
export type EhrActiveCarePlansArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  pathwayType: Scalars['String'];
  patientGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrAdmissionsArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  patientGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrAllergyIntoleranceArgs = {
  id: Scalars['String'];
  patientGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrAllergyIntolerancesArgs = {
  clinicalStatus?: Maybe<Array<Maybe<AllergyIntoleranceClinicalStatusCode>>>;
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  fhirVersion: Scalars['String'];
  listScope?: Maybe<Scalars['String']>;
  listType: Scalars['String'];
  patientGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrAppointmentArgs = {
  id: Scalars['String'];
  organisationGuid: Scalars['String'];
  patientGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrAuditEventsArgs = {
  auditProfile?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['DateTimeOffset']>;
  pathwayId: Scalars['String'];
  pathwayType: Scalars['String'];
  patientGuid: Scalars['String'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  to?: Maybe<Scalars['DateTimeOffset']>;
};


/** Queries the LTHT EHR. */
export type EhrAvailableCarePlanDefinitionsForPatientArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  pathwayType: Scalars['String'];
  patientGuid?: Maybe<Scalars['Guid']>;
  useContext?: Maybe<Scalars['String']>;
};


/** Queries the LTHT EHR. */
export type EhrCarePlanArgs = {
  carePlanId?: Maybe<Scalars['Guid']>;
  interactionId?: Maybe<Scalars['Guid']>;
  patientGuid: Scalars['Guid'];
  type: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrCarePlanDefinitionArgs = {
  id: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrCarePlanDefinitionUseContextsArgs = {
  pathwayType: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrCarePlanDefinitionsArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  pathwayType: Scalars['String'];
  useContext?: Maybe<Scalars['String']>;
};


/** Queries the LTHT EHR. */
export type EhrCarePlanSummariesArgs = {
  pathwayType: Scalars['String'];
  patientGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrClinicalDataHistoryForPatientByUserArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['DateTimeOffset']>;
  patientGuid: Scalars['Guid'];
  statuses?: Maybe<Array<ClinicalApprovalStatus>>;
  templateNames?: Maybe<Array<Scalars['String']>>;
  to?: Maybe<Scalars['DateTimeOffset']>;
};


/** Queries the LTHT EHR. */
export type EhrClinicalDataHistoryForUserArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['DateTimeOffset']>;
  statuses?: Maybe<Array<ClinicalApprovalStatus>>;
  templateNames?: Maybe<Array<Scalars['String']>>;
  to?: Maybe<Scalars['DateTimeOffset']>;
};


/** Queries the LTHT EHR. */
export type EhrClinicalDataHistoryTemplateGroupsForPatientByAuthorArgs = {
  patientGuid: Scalars['Guid'];
};


/** Queries the LTHT EHR. */
export type EhrClinicalDataHistoryTemplateGroupsForPatientBySignatoryArgs = {
  patientGuid: Scalars['Guid'];
};


/** Queries the LTHT EHR. */
export type EhrConditionArgs = {
  id: Scalars['String'];
  patientGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrConditionsArgs = {
  admissionPeriod?: Maybe<ConditionAdmissionPeriodType>;
  clinicalStatus?: Maybe<Array<Maybe<Scalars['String']>>>;
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  loadSpec?: Maybe<InstanceDataLoadSpecType>;
  patientGuid: Scalars['String'];
  search?: Maybe<Scalars['String']>;
  severity?: Maybe<Array<Maybe<Scalars['String']>>>;
  sortBy?: Maybe<SortOptionType>;
  verificationStatus?: Maybe<Array<Maybe<ConditionVerificationStatus>>>;
};


/** Queries the LTHT EHR. */
export type EhrCountersignatureRequestArgs = {
  countersignatureId: Scalars['Guid'];
  patientGuid: Scalars['Guid'];
  templateName: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrCountersignatureRequestsForDocumentArgs = {
  count?: Maybe<Scalars['Int']>;
  countersignatureStatuses?: Maybe<Array<Maybe<ClinicalApprovalStatus>>>;
  cursorToken?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['DateTimeOffset']>;
  instanceGuid: Scalars['Guid'];
  patientGuid: Scalars['Guid'];
  setGuid: Scalars['Guid'];
  templateName: Scalars['String'];
  to?: Maybe<Scalars['DateTimeOffset']>;
};


/** Queries the LTHT EHR. */
export type EhrCountersignatureRequestsForUserArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['DateTimeOffset']>;
  requesterGuid?: Maybe<Scalars['Guid']>;
  templateNames?: Maybe<Array<Scalars['String']>>;
  to?: Maybe<Scalars['DateTimeOffset']>;
};


/** Queries the LTHT EHR. */
export type EhrCountersignatureRequestsForUserOnPatientArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['DateTimeOffset']>;
  patientGuid: Scalars['Guid'];
  requesterGuid?: Maybe<Scalars['Guid']>;
  templateNames?: Maybe<Array<Scalars['String']>>;
  to?: Maybe<Scalars['DateTimeOffset']>;
};


/** Queries the LTHT EHR. */
export type EhrDashboardVariantsArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  dashboardId: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrDocumentReferencesArgs = {
  patientGuid: Scalars['String'];
  template: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrFlagsArgs = {
  patientGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrGroupsForPatientArgs = {
  patientGuid: Scalars['String'];
  showHistory: Scalars['Boolean'];
};


/** Queries the LTHT EHR. */
export type EhrGuidanceArgs = {
  instanceSetGuid: Scalars['String'];
  patientGuid: Scalars['String'];
  template: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrMedicationArgs = {
  id: Scalars['String'];
  patientGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrMedicationsArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  fhirVersion: Scalars['String'];
  listScope?: Maybe<Scalars['String']>;
  listType: Scalars['String'];
  patientGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrPatientArgs = {
  patientGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrPatientGroupArgs = {
  groupNumber: Scalars['String'];
  groupType: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrPatientSearchByFreeTextArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  otherOrganisations?: Maybe<Scalars['Boolean']>;
  searchText: Scalars['String'];
  useTrialIdentifiers?: Maybe<Scalars['Boolean']>;
};


/** Queries the LTHT EHR. */
export type EhrPatientSearchBySearchCriteriaArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['DateTimeOffset']>;
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  nhsNumberGraphQLInput?: Maybe<Scalars['String']>;
  otherOrganisations?: Maybe<Scalars['Boolean']>;
  pedigreeNumber?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  useTrialIdentifiers?: Maybe<Scalars['Boolean']>;
};


/** Queries the LTHT EHR. */
export type EhrQuestionnaireResponseByInstanceArgs = {
  instanceGuid: Scalars['String'];
  name: Scalars['String'];
  patientGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrQuestionnaireResponseLastCompletedArgs = {
  name: Scalars['String'];
  patientGuid: Scalars['String'];
  setGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrQuestionnaireResponsesBySetArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  patientGuid: Scalars['String'];
  setGuid: Scalars['String'];
  templateName: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrRelevantConditionsArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  patientGuid: Scalars['String'];
  scopeId: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrSummaryViewDefinitionArgs = {
  name: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrSummaryViewEntriesArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  patientGuid: Scalars['String'];
};


/** Queries the LTHT EHR. */
export type EhrTasksArgs = {
  assignee?: Maybe<Array<Maybe<TaskAssigneeFilter>>>;
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  pathwayId?: Maybe<Scalars['String']>;
  pathwayType?: Maybe<Scalars['String']>;
  patientGuid: Scalars['String'];
  processId?: Maybe<Scalars['String']>;
  processName?: Maybe<Scalars['String']>;
  sortBy?: Maybe<TaskSorting>;
  status?: Maybe<Array<Maybe<TaskStatusCode>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Queries the LTHT EHR. */
export type EhrTemplateExtensionArgs = {
  baseTemplateName?: Maybe<Scalars['String']>;
  baseTemplateVersion?: Maybe<Scalars['Int']>;
  extensionValue?: Maybe<Scalars['String']>;
};


/** Queries the LTHT EHR. */
export type EhrTemplateMetadataArgs = {
  templateName: Scalars['String'];
  templateVersion?: Maybe<Scalars['Int']>;
};


/** Queries the LTHT EHR. */
export type EhrTerminologyItemsArgs = {
  codeSystem: Scalars['String'];
  codeSystemVersion: Scalars['Int'];
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
};

/** Mutations of the LTHT EHR. */
export type EhrMutation = {
  /** Start Care Plan with Expected Actions */
  addCarePlan?: Maybe<CarePlan>;
  /** Add Multiple Diagnosis (Medical History) */
  addConditions?: Maybe<Array<Maybe<Condition>>>;
  /** Add a favourite Dashboard variant. */
  addDashboardVariantFavourite?: Maybe<Parameters>;
  /** Add a favourite plan definition */
  addPlanDefinitionFavourite?: Maybe<PlanDefinition>;
  /** Cancel an existing countersignature request */
  cancelCountersignatureRequest?: Maybe<Parameters>;
  /** Complete all Care Plan Expected Actions */
  completeCarePlan?: Maybe<CarePlan>;
  /** Discontinue Care Plan and Expected Actions */
  discontinueCarePlan?: Maybe<CarePlan>;
  /** Document Care Plan Action Activities and Goal Evaluations */
  documentCarePlan?: Maybe<Parameters>;
  /** Pause all Care Plan Expected Actions */
  pauseCarePlan?: Maybe<CarePlan>;
  /** Remove a favourite Dashboard variant. */
  removeDashboardVariantFavourite?: Maybe<Parameters>;
  /** Remove a patient from an existing patient group. */
  removePatientFromGroup?: Maybe<Group>;
  /** Remove a favourite plan definition */
  removePlanDefinitionFavourite?: Maybe<PlanDefinition>;
  /** Raise requests for countersignature. */
  requestCountersignature?: Maybe<Parameters>;
  /** Resume all Care Plan Expected Actions */
  resumeCarePlan?: Maybe<CarePlan>;
  /** Review multiple countersignature requests */
  reviewCountersignatureRequests?: Maybe<Parameters>;
  /** Update Diagnosis */
  setConditionStatus?: Maybe<Condition>;
  /** Create a new patient group and assign a patient to it. */
  setNewPatientGroup?: Maybe<Group>;
  /** Assign a patient to a patient group */
  setPatientGroup?: Maybe<Group>;
  /** Update Care Plan with Expected Actions */
  updateCarePlan?: Maybe<CarePlan>;
  /** Update Task */
  updateTask?: Maybe<Task>;
};


/** Mutations of the LTHT EHR. */
export type EhrMutationAddCarePlanArgs = {
  model: CarePlanModelInput;
  patientGuid: Scalars['Guid'];
  signatories?: Maybe<Array<SignatoryInputType>>;
  template: Scalars['String'];
};


/** Mutations of the LTHT EHR. */
export type EhrMutationAddConditionsArgs = {
  conditions: ConditionMinimalInputList;
  patientGuid: Scalars['String'];
  template: Scalars['String'];
};


/** Mutations of the LTHT EHR. */
export type EhrMutationAddDashboardVariantFavouriteArgs = {
  dashboardId: Scalars['String'];
  variantId: Scalars['String'];
};


/** Mutations of the LTHT EHR. */
export type EhrMutationAddPlanDefinitionFavouriteArgs = {
  planDefinitionId: Scalars['Guid'];
  planDefinitionSeriesId: Scalars['Guid'];
};


/** Mutations of the LTHT EHR. */
export type EhrMutationCancelCountersignatureRequestArgs = {
  approvalId: Scalars['Guid'];
  patientGuid: Scalars['Guid'];
  reason?: Maybe<Scalars['String']>;
  templateName: Scalars['String'];
};


/** Mutations of the LTHT EHR. */
export type EhrMutationCompleteCarePlanArgs = {
  carePlanId: Scalars['Guid'];
  patientGuid: Scalars['Guid'];
  signatories?: Maybe<Array<SignatoryInputType>>;
  template: Scalars['String'];
};


/** Mutations of the LTHT EHR. */
export type EhrMutationDiscontinueCarePlanArgs = {
  carePlanId: Scalars['Guid'];
  patientGuid: Scalars['Guid'];
  reasonCode: Scalars['String'];
  reasonText: Scalars['String'];
  signatories?: Maybe<Array<SignatoryInputType>>;
  template: Scalars['String'];
};


/** Mutations of the LTHT EHR. */
export type EhrMutationDocumentCarePlanArgs = {
  document: CarePlanDocumentInput;
  patientGuid: Scalars['Guid'];
  signatories?: Maybe<Array<SignatoryInputType>>;
};


/** Mutations of the LTHT EHR. */
export type EhrMutationPauseCarePlanArgs = {
  carePlanId: Scalars['Guid'];
  continuationDate?: Maybe<Scalars['DateTimeOffset']>;
  patientGuid: Scalars['Guid'];
  reasonCode: Scalars['String'];
  reasonText: Scalars['String'];
  signatories?: Maybe<Array<SignatoryInputType>>;
  template?: Maybe<Scalars['String']>;
};


/** Mutations of the LTHT EHR. */
export type EhrMutationRemoveDashboardVariantFavouriteArgs = {
  dashboardId: Scalars['String'];
  variantId: Scalars['String'];
};


/** Mutations of the LTHT EHR. */
export type EhrMutationRemovePatientFromGroupArgs = {
  groupNumber: Scalars['String'];
  groupType: Scalars['String'];
  patientGuid: Scalars['Guid'];
};


/** Mutations of the LTHT EHR. */
export type EhrMutationRemovePlanDefinitionFavouriteArgs = {
  planDefinitionId: Scalars['Guid'];
  planDefinitionSeriesId: Scalars['Guid'];
};


/** Mutations of the LTHT EHR. */
export type EhrMutationRequestCountersignatureArgs = {
  documents: Array<QuestionnaireResponseReferenceInputType>;
  signatories: Array<SignatoryInputType>;
};


/** Mutations of the LTHT EHR. */
export type EhrMutationResumeCarePlanArgs = {
  carePlanId: Scalars['Guid'];
  patientGuid: Scalars['Guid'];
  signatories?: Maybe<Array<SignatoryInputType>>;
  template?: Maybe<Scalars['String']>;
};


/** Mutations of the LTHT EHR. */
export type EhrMutationReviewCountersignatureRequestsArgs = {
  reviews: Array<CountersignatureReviewInputType>;
};


/** Mutations of the LTHT EHR. */
export type EhrMutationSetConditionStatusArgs = {
  clinicalStatus?: Maybe<ConditionClinicalStatus>;
  conditionId: Scalars['String'];
  patientGuid: Scalars['String'];
  template: Scalars['String'];
  verificationStatus?: Maybe<ConditionVerificationStatus>;
};


/** Mutations of the LTHT EHR. */
export type EhrMutationSetNewPatientGroupArgs = {
  groupType: Scalars['String'];
  patientGuid: Scalars['Guid'];
};


/** Mutations of the LTHT EHR. */
export type EhrMutationSetPatientGroupArgs = {
  groupNumber: Scalars['String'];
  groupType: Scalars['String'];
  patientGuid: Scalars['Guid'];
};


/** Mutations of the LTHT EHR. */
export type EhrMutationUpdateCarePlanArgs = {
  carePlanId: Scalars['Guid'];
  model: CarePlanModelInput;
  patientGuid: Scalars['Guid'];
  signatories?: Maybe<Array<SignatoryInputType>>;
  template: Scalars['String'];
};


/** Mutations of the LTHT EHR. */
export type EhrMutationUpdateTaskArgs = {
  patientGuid: Scalars['String'];
  processId?: Maybe<Scalars['String']>;
  processType?: Maybe<Scalars['String']>;
  taskId?: Maybe<Scalars['String']>;
  taskName?: Maybe<Scalars['String']>;
  taskOutcome?: Maybe<Scalars['String']>;
};

/** The encounter resource represents an encounter between a care professional and the patient (or patient's record). */
export type Encounter = {
  /** The set of accounts that may be used for billing for this Encounter. */
  account?: Maybe<ResourceReference>;
  /** The appointment that scheduled this encounter. */
  appointment?: Maybe<ResourceReference>;
  /** http://hl7.org/fhir/stu3/v3/ActEncounterCode/vs.html */
  class?: Maybe<Coding>;
  /** List of past encounter classes. */
  classHistory?: Maybe<Array<Maybe<EncounterClassHistory>>>;
  /** The list of diagnosis relevant to this encounter. */
  diagnosis?: Maybe<Array<Maybe<EncounterDiagnosis>>>;
  /** Episode(s) of care that this encounter should be recorded against. */
  episodeOfCare?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** AuthDetails about the admission to a healthcare service. */
  hospitalization?: Maybe<EncounterHospitalisation>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  /** The ReferralRequest that initiated this encounter. */
  incomingReferral?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Quantity of time the encounter lasted (less time absent). */
  length?: Maybe<Quantity>;
  /** List of locations where the patient has been. */
  location?: Maybe<Array<Maybe<EncounterLocation>>>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** Another Encounter this encounter is part of. */
  partOf?: Maybe<ResourceReference>;
  /** http://hl7.org/fhir/stu3/v3/ActPriority/vs.html */
  participant?: Maybe<Array<Maybe<EncounterParticipant>>>;
  /** The start and end time of the encounter. */
  period?: Maybe<Period>;
  /** http://hl7.org/fhir/stu3/v3/ActPriority/vs.html */
  priority?: Maybe<CodeableConcept>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** http://hl7.org/fhir/stu3/valueset-encounter-reason.html */
  reason?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** The custodian organization of this Encounter record. */
  serviceProvider?: Maybe<ResourceReference>;
  /** http://hl7.org/fhir/stu3/valueset-encounter-status.html */
  status?: Maybe<EncounterStatusCode>;
  /** List of past encounter statuses. */
  statusHistory?: Maybe<Array<Maybe<EncounterStatusHistory>>>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
  /** http://hl7.org/fhir/stu3/valueset-encounter-type.html */
  type?: Maybe<Array<Maybe<CodeableConcept>>>;
};

/** List of past encounter classes. */
export type EncounterClassHistory = {
  /** http://hl7.org/fhir/stu3/v3/ActEncounterCode/vs.html */
  class: Coding;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The time that the episode was in the specified status. */
  period: Period;
};

/** A continuation of Encounter resources. */
export type EncounterContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of Encounter resources. */
  resources: Array<Maybe<Encounter>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

/** The list of diagnosis relevant to this encounter. */
export type EncounterDiagnosis = {
  /** Reason the encounter takes place (resource). */
  condition?: Maybe<ResourceReference>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Ranking of the diagnosis (for each role type). */
  rank?: Maybe<Scalars['Int']>;
  /** http://hl7.org/fhir/stu3/valueset-diagnosis-role.html */
  role?: Maybe<CodeableConcept>;
};

/** AuthDetails about the admission to a healthcare service. */
export type EncounterHospitalisation = {
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-SourceOfAdmission-1 */
  admitSource?: Maybe<CodeableConcept>;
  /** Location to which the patient is discharged. */
  destination?: Maybe<ResourceReference>;
  /** http://hl7.org/fhir/stu3/valueset-encounter-diet.html */
  dietPreference?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DischargeDestination-1 */
  dischargeDisposition?: Maybe<CodeableConcept>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The location from which the patient came before admission. */
  origin?: Maybe<ResourceReference>;
  /** Pre-admission identifier. */
  preAdmissionIdentifier?: Maybe<Identifier>;
  /** http://hl7.org/fhir/stu3/ValueSet/v2-0092 */
  reAdmission?: Maybe<CodeableConcept>;
  /** http://hl7.org/fhir/stu3/valueset-encounter-special-arrangements.html */
  specialArrangement?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** http://hl7.org/fhir/stu3/valueset-encounter-special-courtesy.html */
  specialCourtesy?: Maybe<Array<Maybe<CodeableConcept>>>;
};

/** List of locations where the patient has been. */
export type EncounterLocation = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Location the encounter takes place. */
  location: ResourceReference;
  /** Time period during which the patient was present at the location. */
  period?: Maybe<Period>;
  /** http://hl7.org/fhir/stu3/valueset-encounter-location-status.html */
  status?: Maybe<EncounterLocationStatusCode>;
};

export enum EncounterLocationStatusCode {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Planned = 'PLANNED',
  Reserved = 'RESERVED'
}

/** List of participants involved in the encounter. */
export type EncounterParticipant = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Persons involved in the encounter other than the patient. */
  individual?: Maybe<ResourceReference>;
  /** Period of time during the encounter that the participant participated. */
  period?: Maybe<Period>;
  /** http://hl7.org/fhir/stu3/valueset-encounter-participant-type.html */
  type?: Maybe<Array<Maybe<CodeableConcept>>>;
};

export enum EncounterStatusCode {
  Arrived = 'ARRIVED',
  Cancelled = 'CANCELLED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Finished = 'FINISHED',
  InProgress = 'IN_PROGRESS',
  OnLeave = 'ON_LEAVE',
  Planned = 'PLANNED',
  Triaged = 'TRIAGED',
  Unknown = 'UNKNOWN'
}

/** List of past encounter statuses. */
export type EncounterStatusHistory = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The time that the episode was in the specified status. */
  period: Period;
  /** http://hl7.org/fhir/stu3/valueset-encounter-status.html */
  status?: Maybe<EncounterStatusCode>;
};

export enum EntityAction {
  Create = 'CREATE',
  Delete = 'DELETE',
  Read = 'READ',
  Update = 'UPDATE'
}

/** Permission to perform one or more Operations on a given Entity. */
export type EntityPermission = {
  /** The Operation(s) the User can perform on the Entity. */
  actions: Array<EntityAction>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The Resource the user has access to. */
  resource?: Maybe<Scalars['String']>;
  /** The Entity the user has access to. */
  type: EntityType;
};

export enum EntityType {
  Address = 'ADDRESS',
  Admission = 'ADMISSION',
  AllergyIntolerance = 'ALLERGY_INTOLERANCE',
  Annotation = 'ANNOTATION',
  Appointment = 'APPOINTMENT',
  ApprovalToView = 'APPROVAL_TO_VIEW',
  AssessmentHistory = 'ASSESSMENT_HISTORY',
  AssessmentRecord = 'ASSESSMENT_RECORD',
  Attachments = 'ATTACHMENTS',
  AuditEvent = 'AUDIT_EVENT',
  BloodTest = 'BLOOD_TEST',
  BreakGlass = 'BREAK_GLASS',
  CareEpisode = 'CARE_EPISODE',
  CarePlan = 'CARE_PLAN',
  CareTeam = 'CARE_TEAM',
  CdsTemplate = 'CDS_TEMPLATE',
  Chemotherapy = 'CHEMOTHERAPY',
  ChildrenSocialCare = 'CHILDREN_SOCIAL_CARE',
  Clinic = 'CLINIC',
  ClinicalAlerts = 'CLINICAL_ALERTS',
  ClinicalTrial = 'CLINICAL_TRIAL',
  ClinicalTrialDocument = 'CLINICAL_TRIAL_DOCUMENT',
  ClinicOutcome = 'CLINIC_OUTCOME',
  CommunityTreatmentOrder = 'COMMUNITY_TREATMENT_ORDER',
  Consultation = 'CONSULTATION',
  Contact = 'CONTACT',
  CustomListAdmittedPatient = 'CUSTOM_LIST_ADMITTED_PATIENT',
  CustomListAssignedTasks = 'CUSTOM_LIST_ASSIGNED_TASKS',
  CustomListClinicAppointments = 'CUSTOM_LIST_CLINIC_APPOINTMENTS',
  CustomListCommunityPharmacy = 'CUSTOM_LIST_COMMUNITY_PHARMACY',
  CustomListDischargedPatient = 'CUSTOM_LIST_DISCHARGED_PATIENT',
  CustomListEdan = 'CUSTOM_LIST_EDAN',
  CustomListInfectionPreventionControl = 'CUSTOM_LIST_INFECTION_PREVENTION_CONTROL',
  CustomListOutpatientClinicRecentlyDispensed = 'CUSTOM_LIST_OUTPATIENT_CLINIC_RECENTLY_DISPENSED',
  CustomListOutpatientPharmacy = 'CUSTOM_LIST_OUTPATIENT_PHARMACY',
  CustomListPatient = 'CUSTOM_LIST_PATIENT',
  CustomListPreAssessment = 'CUSTOM_LIST_PRE_ASSESSMENT',
  CustomListSdec = 'CUSTOM_LIST_SDEC',
  CustomListSepsis = 'CUSTOM_LIST_SEPSIS',
  CustomListSuspiciousFindings = 'CUSTOM_LIST_SUSPICIOUS_FINDINGS',
  Diagnosis = 'DIAGNOSIS',
  Document = 'DOCUMENT',
  Edan = 'EDAN',
  EdanAdmin = 'EDAN_ADMIN',
  Emeds = 'EMEDS',
  Encounter = 'ENCOUNTER',
  EndOfLifeCare = 'END_OF_LIFE_CARE',
  Epro = 'EPRO',
  FileLink = 'FILE_LINK',
  Guidance = 'GUIDANCE',
  Helm = 'HELM',
  Hmds = 'HMDS',
  Hospice = 'HOSPICE',
  InfectionControl = 'INFECTION_CONTROL',
  Investigation = 'INVESTIGATION',
  LabResult = 'LAB_RESULT',
  LstInpatientWards = 'LST_INPATIENT_WARDS',
  LstMultidisciplinaryTeams = 'LST_MULTIDISCIPLINARY_TEAMS',
  LstMyCustomViews = 'LST_MY_CUSTOM_VIEWS',
  LstOperatingTheatres = 'LST_OPERATING_THEATRES',
  LstOutpatientClinics = 'LST_OUTPATIENT_CLINICS',
  LstReferrals = 'LST_REFERRALS',
  LstSharedViews = 'LST_SHARED_VIEWS',
  LstVirtualLists = 'LST_VIRTUAL_LISTS',
  Mdt = 'MDT',
  Medication = 'MEDICATION',
  Monitoring = 'MONITORING',
  MpvePrescribe = 'MPVE_PRESCRIBE',
  MpvAdmissionReview = 'MPV_ADMISSION_REVIEW',
  MpvAntibiotic = 'MPV_ANTIBIOTIC',
  MpvAvailableBeds = 'MPV_AVAILABLE_BEDS',
  MpvBed = 'MPV_BED',
  MpvClinicalReview = 'MPV_CLINICAL_REVIEW',
  MpvCriteriaLedDischarge = 'MPV_CRITERIA_LED_DISCHARGE',
  MpvDementia = 'MPV_DEMENTIA',
  MpvDiabetes = 'MPV_DIABETES',
  MpvDietitian = 'MPV_DIETITIAN',
  MpvDischargePlanning = 'MPV_DISCHARGE_PLANNING',
  MpvFall = 'MPV_FALL',
  MpvHealthcareAssociatedInfection = 'MPV_HEALTHCARE_ASSOCIATED_INFECTION',
  MpvInternalReferral = 'MPV_INTERNAL_REFERRAL',
  MpvJobs = 'MPV_JOBS',
  MpvLengthOfStay = 'MPV_LENGTH_OF_STAY',
  MpvMedicalSocialWork = 'MPV_MEDICAL_SOCIAL_WORK',
  MpvMedicinesReconciliation = 'MPV_MEDICINES_RECONCILIATION',
  MpvNamedNurse = 'MPV_NAMED_NURSE',
  MpvNationalEarlyWarning = 'MPV_NATIONAL_EARLY_WARNING',
  MpvNutrition = 'MPV_NUTRITION',
  MpvObservation = 'MPV_OBSERVATION',
  MpvObservationSettings = 'MPV_OBSERVATION_SETTINGS',
  MpvOccupationalTherapy = 'MPV_OCCUPATIONAL_THERAPY',
  MpvPaediatricNutrition = 'MPV_PAEDIATRIC_NUTRITION',
  MpvPalliativeCareTeam = 'MPV_PALLIATIVE_CARE_TEAM',
  MpvPhysiotherapy = 'MPV_PHYSIOTHERAPY',
  MpvPressureUlcer = 'MPV_PRESSURE_ULCER',
  MpvRedTray = 'MPV_RED_TRAY',
  MpvSchool = 'MPV_SCHOOL',
  MpvShiftHandover = 'MPV_SHIFT_HANDOVER',
  MpvShiftHandoverComment = 'MPV_SHIFT_HANDOVER_COMMENT',
  MpvSpecialityAndType = 'MPV_SPECIALITY_AND_TYPE',
  MpvSummary = 'MPV_SUMMARY',
  MpvTransferPlanning = 'MPV_TRANSFER_PLANNING',
  MpvVenousThromboembolism = 'MPV_VENOUS_THROMBOEMBOLISM',
  NewsInterventionsUnrestricted = 'NEWS_INTERVENTIONS_UNRESTRICTED',
  NursingCarePlan = 'NURSING_CARE_PLAN',
  Observation = 'OBSERVATION',
  OnlineForms = 'ONLINE_FORMS',
  Organisation = 'ORGANISATION',
  OutPatient = 'OUT_PATIENT',
  Pathology = 'PATHOLOGY',
  Patient = 'PATIENT',
  PatientGroups = 'PATIENT_GROUPS',
  PatientProduct = 'PATIENT_PRODUCT',
  PatientTasks = 'PATIENT_TASKS',
  ProcedureNote = 'PROCEDURE_NOTE',
  QToolQuestionnaireResponse = 'Q_TOOL_QUESTIONNAIRE_RESPONSE',
  Radiotherapy = 'RADIOTHERAPY',
  RadiotherapyBooking = 'RADIOTHERAPY_BOOKING',
  RecoveryCarePlan = 'RECOVERY_CARE_PLAN',
  Referral = 'REFERRAL',
  Review = 'REVIEW',
  SelfClaim = 'SELF_CLAIM',
  Sepsis = 'SEPSIS',
  Spine = 'SPINE',
  SummaryViewPilot = 'SUMMARY_VIEW_PILOT',
  Surgery = 'SURGERY',
  Team = 'TEAM',
  TeamMembership = 'TEAM_MEMBERSHIP',
  Theatre = 'THEATRE',
  TrustWideWatchListManagement = 'TRUST_WIDE_WATCH_LIST_MANAGEMENT',
  User = 'USER',
  VirtualWard = 'VIRTUAL_WARD',
  Vte = 'VTE',
  WaitingTime = 'WAITING_TIME',
  Ward = 'WARD',
  WardAttender = 'WARD_ATTENDER',
  WardConfig = 'WARD_CONFIG',
  WardStay = 'WARD_STAY',
  WatchListManagement = 'WATCH_LIST_MANAGEMENT',
  WinDipCaseNotes = 'WIN_DIP_CASE_NOTES',
  WinDipReferalDocuments = 'WIN_DIP_REFERAL_DOCUMENTS',
  XForms = 'X_FORMS'
}

/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export type EpisodeOfCare = {
  /** The set of accounts that may be used for billing for this EpisodeOfCare. */
  account?: Maybe<ResourceReference>;
  /** Care manager/care co-ordinator for the patient. */
  careManager?: Maybe<ResourceReference>;
  /** The list of diagnosis relevant to this episode of care. */
  diagnosis?: Maybe<Array<Maybe<EpisodeOfCareDiagnosis>>>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Organization that assumes care. */
  managingOrganization?: Maybe<ResourceReference>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** Interval during responsibility is assumed. */
  period?: Maybe<Period>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** Originating Referral Request(s). */
  referralRequest?: Maybe<Array<Maybe<ResourceReference>>>;
  /** http://hl7.org/fhir/stu3/valueset-episode-of-care-status.html */
  status: EpisodeOfCareStatusCode;
  /** Past list of status codes (the current status may be included to cover the start date of the status). */
  statusHistory?: Maybe<Array<Maybe<EpisodeOfCareStatusHistory>>>;
  /** Other practitioners facilitating this episode of care. */
  team?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
  /** http://hl7.org/fhir/stu3/valueset-episodeofcare-type.html */
  type?: Maybe<Array<Maybe<CodeableConcept>>>;
};

/** The list of diagnosis relevant to this episode of care. */
export type EpisodeOfCareDiagnosis = {
  /** Conditions/problems/diagnoses this episode of care is for. */
  condition: ResourceReference;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Ranking of the diagnosis (for each role type). */
  rank?: Maybe<Scalars['Int']>;
  /** http://hl7.org/fhir/stu3/valueset-diagnosis-role.html */
  role?: Maybe<CodeableConcept>;
};

export enum EpisodeOfCareStatusCode {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Finished = 'FINISHED',
  OnHold = 'ON_HOLD',
  Planned = 'PLANNED',
  WaitList = 'WAIT_LIST'
}

/** Past list of status codes (the current status may be included to cover the start date of the status). */
export type EpisodeOfCareStatusHistory = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Duration the EpisodeOfCare was in the specified status. */
  period: Period;
  /** http://hl7.org/fhir/stu3/valueset-episode-of-care-status.html */
  status: EncounterStatusCode;
};

/** Additional content defined by implementations. */
export type Extension = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Value of extension (String Array). */
  multiValueString?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Identifies the meaning of the extension. */
  url: Scalars['String'];
  /** Value of extension (Attachment). */
  valueAttachment?: Maybe<Attachment>;
  /** Value of extension (Boolean). */
  valueBoolean?: Maybe<Scalars['Boolean']>;
  /** Value of extension (CodeableConcept). */
  valueCodeableConcept?: Maybe<CodeableConcept>;
  /** Value of extension (Coding). */
  valueCoding?: Maybe<Coding>;
  /** Value of extension (DateTime). */
  valueDateTime?: Maybe<PartialDateTime>;
  /** Value of extension (Identifier). */
  valueIdentifier?: Maybe<Identifier>;
  /** Value of extension (Integer). */
  valueInteger?: Maybe<Scalars['Int']>;
  /** Value of extension (Quantity). */
  valueQuantity?: Maybe<Quantity>;
  /** Value of extension (String). */
  valueString?: Maybe<Scalars['String']>;
  /** Value of extension (Uuid). */
  valueUuid?: Maybe<Scalars['Guid']>;
};

export type ExtensionInput = {
  /** Identifies the meaning of the extension */
  url: Scalars['String'];
  /** Boolean value of extension */
  valueBoolean?: Maybe<Scalars['Boolean']>;
};

export enum FeatureInstance {
  FilterAssignedTasks = 'FILTER_ASSIGNED_TASKS',
  FilterInactiveTasks = 'FILTER_INACTIVE_TASKS',
  FormsForHealthLaunch = 'FORMS_FOR_HEALTH_LAUNCH',
  GpConnectDataProvider = 'GP_CONNECT_DATA_PROVIDER',
  InteractWithCountersignature = 'INTERACT_WITH_COUNTERSIGNATURE',
  InteractWithDiagnosisDashboard = 'INTERACT_WITH_DIAGNOSIS_DASHBOARD',
  InterweavePortalLaunch = 'INTERWEAVE_PORTAL_LAUNCH',
  ResourceAuthorization = 'RESOURCE_AUTHORIZATION',
  SepsisAdultEnabled = 'SEPSIS_ADULT_ENABLED',
  SepsisAdultFullWorkflowEnabled = 'SEPSIS_ADULT_FULL_WORKFLOW_ENABLED',
  SepsisObservationsWidgetEnabled = 'SEPSIS_OBSERVATIONS_WIDGET_ENABLED',
  YhcrDataProvider = 'YHCR_DATA_PROVIDER'
}

/** An instance of a feature that is controlled via a toggle. */
export type FeatureToggle = {
  /** The message to show (if status is message). */
  disabledMessage?: Maybe<Scalars['String']>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The feature instance the toggle controls. */
  featureFlag: FeatureInstance;
  /** The status of the feature toggle. */
  isEnabled: Scalars['Boolean'];
};

/** Prospective warnings of potential issues when providing care to the patient. */
export type Flag = {
  /** Flag creator. */
  author?: Maybe<ResourceReference>;
  /** http://hl7.org/fhir/stu3/valueset-flag-category.html */
  category?: Maybe<CodeableConcept>;
  /** http://hl7.org/fhir/stu3/valueset-flag-code.html */
  code: CodeableConcept;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** Time period when flag is active. */
  period?: Maybe<Period>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** http://hl7.org/fhir/stu3/valueset-flag-status.html */
  status: FlagStatusCode;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
};

export enum FlagStatusCode {
  Active = 'ACTIVE',
  EnteredInError = 'ENTERED_IN_ERROR',
  Inactive = 'INACTIVE'
}

/** Queries the GP Connect system. */
export type GpConnect = {
  /** Data Availability Check */
  dataAvailability?: Maybe<DataAvailability>;
};


/** Queries the GP Connect system. */
export type GpConnectDataAvailabilityArgs = {
  nhsNumber: Scalars['String'];
};

/** Describes the intended objective(s) for a patient, group or organization */
export type Goal = {
  /** Describes the progression, or lack thereof, towards the goal against the target. */
  achievementStatus?: Maybe<CodeableConcept>;
  /** E.g. Treatment, dietary, behavioral, etc. */
  category?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** Code or text describing goal. */
  description?: Maybe<CodeableConcept>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** External Ids for this goal. */
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Codes that reflect the current state of a goal and whether the goal is still being targeted. */
  lifecycleStatus?: Maybe<GoalLifecycleStatus>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** Comments about the goal */
  note?: Maybe<Annotation>;
  /** What result was achieved regarding the goal? */
  outcomeCode?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** Indicates the level of importance associated with reaching or sustaining a goal. */
  priority?: Maybe<CodeableConcept>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** When goal pursuit begins */
  startCodeableConcept?: Maybe<CodeableConcept>;
  /** When goal pursuit begins */
  startDate?: Maybe<PartialDateTime>;
  /** When goal status took effect */
  statusDate?: Maybe<PartialDateTime>;
  /** Reason for current status */
  statusReason?: Maybe<Scalars['String']>;
  /** Who this goal is intended for */
  subject?: Maybe<ResourceReference>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
};

export enum GoalLifecycleStatus {
  Accepted = 'ACCEPTED',
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  EnteredInError = 'ENTERED_IN_ERROR',
  OnHold = 'ON_HOLD',
  Planned = 'PLANNED',
  Proposed = 'PROPOSED',
  Rejected = 'REJECTED'
}

/** An unordered set grouping other domain resources together. */
export type Group = {
  /** Whether this group's record is in active use */
  active?: Maybe<Scalars['Boolean']>;
  /** If true, indicates that the resource refers to a specific group of real individuals. If false, the group defines a set of intended individuals. */
  actual: Scalars['Boolean'];
  /** Characteristic filters to include or exclude group members by. */
  characteristic?: Maybe<Array<Maybe<GroupCharacteristic>>>;
  /** The kind of group members. */
  code?: Maybe<CodeableConcept>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Unique identifiers for the group. */
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Entity that is the custodian of the Group's definition. */
  managingEntity?: Maybe<ResourceReference>;
  /** Who or what is in group. */
  member?: Maybe<Array<Maybe<GroupMember>>>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** Label for this group. */
  name?: Maybe<Scalars['String']>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** How many members are in the group. */
  quantity?: Maybe<Scalars['UInt']>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
  /** Group Type, e.g. Patient, Medication etc. */
  type: GroupType;
};

/** A group member filter, defining which members to include or exclude. */
export type GroupCharacteristic = {
  /** The kind of group characteristic. */
  code: CodeableConcept;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Whether to include or exclude group members with this characteristic. */
  exclude: Scalars['Boolean'];
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Whether this group's record is in active use */
  period?: Maybe<Period>;
  /** Boolean chacteristic */
  valueBoolean?: Maybe<Scalars['Boolean']>;
  /** Codeable Concept characteristic */
  valueCodeableConcept?: Maybe<CodeableConcept>;
  /** Unsigned Integer characteristic */
  valueQuantity?: Maybe<Scalars['UInt']>;
  /** Range characteristic */
  valueRange?: Maybe<Range>;
  /** Resource Reference characteristic */
  valueReference?: Maybe<ResourceReference>;
};

/** The reference to the resource belonging to the group */
export type GroupMember = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Reference to the group member */
  entity?: Maybe<ResourceReference>;
  /** The Patient this group member represents */
  entityPatient?: Maybe<Patient>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** If member is no longer in group */
  inactive?: Maybe<Scalars['Boolean']>;
  /** Period member belonged to the group */
  period?: Maybe<Period>;
};

export enum GroupType {
  Animal = 'ANIMAL',
  Device = 'DEVICE',
  Medication = 'MEDICATION',
  Person = 'PERSON',
  Practitioner = 'PRACTITIONER',
  Substance = 'SUBSTANCE'
}


/** https://hl7.org/fhir/2018May/guidanceresponse.html */
export type Guidance = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** The guidance item. */
  note?: Maybe<Array<Maybe<Annotation>>>;
  /** When the guidance response was processed. */
  occuranceDateTime?: Maybe<PartialDateTime>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** Describes the reason for the guidance response in coded or textual form. */
  reasonCode?: Maybe<CodeableConcept>;
  /** The identifier of the request associated with this response, if any. */
  requestIdentifier?: Maybe<Identifier>;
  /** http://hl7.org/fhir/ValueSet/guidance-response-status */
  status: GuidanceStatusCode;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
};

export enum GuidanceStatusCode {
  DataRequested = 'DATA_REQUESTED',
  DataRequired = 'DATA_REQUIRED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Failure = 'FAILURE',
  InProgress = 'IN_PROGRESS',
  Success = 'SUCCESS'
}

/** A name of a human with text, parts and usage information. */
export type HumanName = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Family name (often called 'Surname'). */
  family?: Maybe<Scalars['String']>;
  /** Given names (not always 'first'). Includes middle names. This repeating element order: Given Names appear in the correct order for presenting the name. */
  given?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Time period when name was/is in use. */
  period?: Maybe<Period>;
  /** Parts that come before the name. This repeating element order: Prefixes appear in the correct order for presenting the name. */
  prefix?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Parts that come after the name. This repeating element order: Suffixes appear in the correct order for presenting the name. */
  suffix?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Text representation of the full name. */
  text?: Maybe<Scalars['String']>;
  /** http://hl7.org/fhir/stu3/valueset-name-use.html */
  use?: Maybe<HumanNameUseCode>;
};

/** http://hl7.org/fhir/stu3/valueset-name-use.html */
export enum HumanNameUseCode {
  Anonymous = 'ANONYMOUS',
  Maiden = 'MAIDEN',
  Nickname = 'NICKNAME',
  Official = 'OFFICIAL',
  Old = 'OLD',
  Temp = 'TEMP',
  Usual = 'USUAL'
}

/** A business identifier associated with a single object or entity within a given system. */
export type Identifier = {
  /** Organization that issued id (may be just text). */
  assigner?: Maybe<ResourceReference>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Time period when id is/was valid for use. */
  period?: Maybe<Period>;
  /** The namespace for the identifier value. */
  system?: Maybe<Scalars['String']>;
  /** http://hl7.org/fhir/stu3/valueset-identifier-type.html */
  type?: Maybe<CodeableConcept>;
  /** http://hl7.org/fhir/stu3/valueset-identifier-use.html */
  use?: Maybe<IdentifierUseCode>;
  /** The value that is unique. */
  value: Scalars['String'];
};

/** An identifier intended for computation. */
export type IdentifierInputType = {
  /** Time period when id is/was valid for use. */
  period?: Maybe<PeriodInputGraphType>;
  /** The namespace for the identifier value. */
  system?: Maybe<Scalars['String']>;
  /** Description of identifier. */
  type?: Maybe<CodeableConceptInput>;
  /** The purpose of this identifier. */
  use?: Maybe<UseCode>;
  /** The value that is unique. */
  value?: Maybe<Scalars['String']>;
};

export enum IdentifierUseCode {
  Official = 'OFFICIAL',
  Secondary = 'SECONDARY',
  Temp = 'TEMP',
  Usual = 'USUAL'
}

export type InstanceDataLoadSpecType = {
  templates: Array<Maybe<ParentTemplateLoadSpecType>>;
};

export enum IntentCode {
  Order = 'ORDER',
  Plan = 'PLAN',
  Proposal = 'PROPOSAL'
}

/** Queries the LYPFT EHR. */
export type Lypft = {
  /** Allergies and Intolerances */
  allergyIntolerances?: Maybe<Array<Maybe<AllergyIntolerance>>>;
  /** Appointments */
  appointments?: Maybe<EncounterContinuation>;
  /** Care Plans */
  carePlans?: Maybe<Array<Maybe<CarePlan>>>;
  /** Care Teams */
  careTeams?: Maybe<Array<Maybe<EpisodeOfCare>>>;
  /** Community Treatment Orders */
  communityTreatmentOrders?: Maybe<Array<Maybe<LypftCommunityTreatmentOrder>>>;
  /** Data Availability Check */
  dataAvailability?: Maybe<DataAvailability>;
  /** Documents */
  documents?: Maybe<Array<Maybe<DocumentReference>>>;
  /** Alerts */
  flags?: Maybe<Array<Maybe<Flag>>>;
  /** Hospital Stays */
  hospitalStays?: Maybe<Array<Maybe<Encounter>>>;
};


/** Queries the LYPFT EHR. */
export type LypftAllergyIntolerancesArgs = {
  clinicalStatus?: Maybe<Array<Maybe<AllergyIntoleranceClinicalStatusCode>>>;
  nhsNumber: Scalars['String'];
};


/** Queries the LYPFT EHR. */
export type LypftAppointmentsArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  nhsNumber: Scalars['String'];
  status?: Maybe<Array<Maybe<EncounterStatusCode>>>;
};


/** Queries the LYPFT EHR. */
export type LypftCarePlansArgs = {
  nhsNumber: Scalars['String'];
};


/** Queries the LYPFT EHR. */
export type LypftCareTeamsArgs = {
  nhsNumber: Scalars['String'];
};


/** Queries the LYPFT EHR. */
export type LypftCommunityTreatmentOrdersArgs = {
  nhsNumber: Scalars['String'];
};


/** Queries the LYPFT EHR. */
export type LypftDataAvailabilityArgs = {
  nhsNumber: Scalars['String'];
};


/** Queries the LYPFT EHR. */
export type LypftDocumentsArgs = {
  nhsNumber: Scalars['String'];
};


/** Queries the LYPFT EHR. */
export type LypftFlagsArgs = {
  nhsNumber: Scalars['String'];
};


/** Queries the LYPFT EHR. */
export type LypftHospitalStaysArgs = {
  nhsNumber: Scalars['String'];
};

export enum LaunchApp {
  FormsForHealth = 'FORMS_FOR_HEALTH',
  InterweavePortal = 'INTERWEAVE_PORTAL'
}

/** Permission to launch one or more Apps with the given Intents. */
export type LaunchPermission = {
  /** The App the user can launch. */
  application: LaunchApp;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The Intent(s) the user can launch the App with. */
  intents: Array<Scalars['String']>;
  /** The Resource the user wishes to launch. */
  resource: Scalars['String'];
};

/** Community Treatment Order – LYPFT Custom Resource. */
export type LypftCommunityTreatmentOrder = {
  /** ?Needs more information from LYPFT? */
  consentToTreat?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** The legal status of the treatment order. */
  legalStatus?: Maybe<CodeableConcept>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** The time period of the treatment order. */
  period: Period;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** ?Needs more information from LYPFT? */
  restrictions?: Maybe<Scalars['String']>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
};

export type MedicationRequest = {
  authoredOn?: Maybe<PartialDateTime>;
  category?: Maybe<CodeableConcept>;
  context?: Maybe<ResourceReference>;
  dosageInstruction?: Maybe<Array<Maybe<DosageType>>>;
  dosageRelationship?: Maybe<DosageRelationshipType>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  intent?: Maybe<MedicationRequestIntentType>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  medicationReference?: Maybe<MedicationType>;
  /** Metadata about the resource. */
  metadata: Metadata;
  note?: Maybe<Array<Maybe<Annotation>>>;
  priority?: Maybe<MedicationRequestPriorityType>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  reasonCode?: Maybe<Array<Maybe<CodeableConcept>>>;
  reasonReference?: Maybe<ResourceReference>;
  status?: Maybe<MedicationRequestStatusType>;
  subject?: Maybe<ResourceReference>;
  supportingInformation?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
};

/** A continuation of Medication Request resources. */
export type MedicationRequestContinuationType = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of Medication Request resources. */
  resources: Array<Maybe<MedicationRequest>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

export enum MedicationRequestIntentType {
  InstanceOrder = 'INSTANCE_ORDER',
  Order = 'ORDER',
  Plan = 'PLAN',
  Proposal = 'PROPOSAL'
}

export enum MedicationRequestPriorityType {
  /** ASAP */
  Asap = 'ASAP',
  /** Routine */
  Routine = 'ROUTINE',
  /** Stat */
  Stat = 'STAT',
  /** Urgent */
  Urgent = 'URGENT'
}

export enum MedicationRequestStatusType {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Draft = 'DRAFT',
  EnteredInError = 'ENTERED_IN_ERROR',
  OnHold = 'ON_HOLD',
  Stopped = 'STOPPED',
  Unknown = 'UNKNOWN'
}

export type MedicationType = {
  code?: Maybe<CodeableConcept>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  form?: Maybe<CodeableConcept>;
  isBrand?: Maybe<Scalars['Boolean']>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
};

/** Metadata about the resource. */
export type Metadata = {
  /** The sources of the resource. */
  dataSources: Array<Maybe<Coding>>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Has data been redacted for this resource instance? */
  isRedacted: Scalars['Boolean'];
  /** When the resource last changed - e.g. when the version changed. */
  lastUpdated?: Maybe<Scalars['DateTimeOffset']>;
  /** When the resource was requested. */
  requestedWhen: Scalars['DateTimeOffset'];
  /** Security tags for this resource instance. */
  security?: Maybe<Array<Maybe<Coding>>>;
  /** To identify and relate resources to process and workflow. */
  tag?: Maybe<Array<Maybe<Coding>>>;
  /** The version specific identifier. This value changes when the resource is created, updated, or deleted. */
  versionId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  ehr?: Maybe<EhrMutation>;
};

/** Text summary of the resource, for human interpretation. */
export type Narrative = {
  /** Limited xhtml content. */
  div: Scalars['String'];
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** http://hl7.org/fhir/narrative-status */
  status?: Maybe<NarrativeStatusCode>;
  /** Parsed text from Div. */
  text: Scalars['String'];
};

export enum NarrativeStatusCode {
  Additional = 'ADDITIONAL',
  Empty = 'EMPTY',
  Extensions = 'EXTENSIONS',
  Generated = 'GENERATED'
}

/** https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Observation-1 */
export type Observation = {
  basedOn?: Maybe<ResourceReference>;
  bodySite?: Maybe<Array<Maybe<CodeableConcept>>>;
  category?: Maybe<Array<Maybe<CodeableConcept>>>;
  code: CodeableConcept;
  comment?: Maybe<Scalars['String']>;
  component?: Maybe<Array<Maybe<ObservationComponent>>>;
  context?: Maybe<ResourceReference>;
  dataAbsentReason?: Maybe<CodeableConcept>;
  device?: Maybe<ResourceReference>;
  effective?: Maybe<ObservationEffective>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  interpretation?: Maybe<CodeableConcept>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  issued?: Maybe<PartialDateTime>;
  /** Metadata about the resource. */
  metadata: Metadata;
  method?: Maybe<CodeableConcept>;
  performer?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  referenceRange?: Maybe<Array<Maybe<ObservationReferenceRange>>>;
  related?: Maybe<Array<Maybe<ObservationReferenceRange>>>;
  specimen?: Maybe<ResourceReference>;
  status: ObservationStatusCode;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
  value?: Maybe<ObservationValue>;
};

/** Component results */
export type ObservationComponent = {
  code: CodeableConcept;
  dataAbsentReason?: Maybe<CodeableConcept>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  interpretation?: Maybe<CodeableConcept>;
  referenceRange?: Maybe<Array<Maybe<ObservationReferenceRange>>>;
  value?: Maybe<ObservationValue>;
};

/** Clinically relevant time/time-period for observation */
export type ObservationEffective = {
  effectiveDateTime?: Maybe<PartialDateTime>;
  effectivePeriod?: Maybe<Period>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
};

/** Provides guide for interpretation */
export type ObservationReferenceRange = {
  age?: Maybe<Range>;
  appliesTo?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  high?: Maybe<Quantity>;
  low?: Maybe<Quantity>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<CodeableConcept>;
};

/**  Codes providing the status of an observation */
export enum ObservationStatusCode {
  Amended = 'AMENDED',
  Cancelled = 'CANCELLED',
  Corrected = 'CORRECTED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Final = 'FINAL',
  Preliminary = 'PRELIMINARY',
  Registered = 'REGISTERED',
  Unknown = 'UNKNOWN'
}

/** Actual result */
export type ObservationValue = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  valueAttachment?: Maybe<Attachment>;
  valueBoolean?: Maybe<Scalars['Boolean']>;
  valueCodeableConcept?: Maybe<CodeableConcept>;
  valueDateTime?: Maybe<PartialDateTime>;
  valuePeriod?: Maybe<Period>;
  valueQuantity?: Maybe<Quantity>;
  valueRange?: Maybe<Range>;
  valueRatio?: Maybe<Ratio>;
  valueSampledData?: Maybe<SampledData>;
  valueString?: Maybe<Scalars['String']>;
};

/** Operation Parameter */
export type Parameter = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  name?: Maybe<Scalars['String']>;
  part?: Maybe<Array<Maybe<Parameter>>>;
  valueBoolean?: Maybe<Scalars['Boolean']>;
  valueCode?: Maybe<Scalars['String']>;
  valueCodeableConcept?: Maybe<CodeableConcept>;
  valueCoding?: Maybe<Coding>;
  valueDateTime?: Maybe<PartialDateTime>;
  valueInt?: Maybe<Scalars['Int']>;
  valueString?: Maybe<Scalars['String']>;
  valueUrl?: Maybe<Scalars['String']>;
  valueUuid?: Maybe<Scalars['Guid']>;
};

/** Operation Request or Response */
export type Parameters = {
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Metadata about the resource. */
  metadata: Metadata;
  parameter?: Maybe<Array<Maybe<Parameter>>>;
};

export type ParentTemplateLoadSpecType = {
  fieldCdsPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  templateName: Scalars['String'];
  templateVersionFrom?: Maybe<Scalars['Int']>;
  templateVersionTo?: Maybe<Scalars['Int']>;
};

/** A Date + Time, Year, Year + Month, or just a Time. */
export type PartialDateTime = {
  /** Describes what the value represents – a full full or partial DateTime. */
  kind?: Maybe<PartialDateTimeKindCode>;
  /** Represents a point in time, typically expressed as a date and time of day, relative to Coordinated Universal Time (UTC). */
  value?: Maybe<Scalars['DateTimeOffset']>;
};

/** A Date + Time, Year, Year + Month, or just a Time. */
export type PartialDateTimeInput = {
  /** yyyy-MM-dd'T'HH:mm:ss.FFFFFFFK, yyyy-MM-dd HH:mm:ss, yyyy-MM-dd, yyyy-MM, or yyyy. */
  text: Scalars['String'];
};

export enum PartialDateTimeKindCode {
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Time = 'TIME',
  Year = 'YEAR',
  YearMonth = 'YEAR_MONTH'
}

/** The patient resource represents the patient involved in the provision of healthcare related services. */
export type Patient = {
  /** Whether this patient's record is in active use. */
  active?: Maybe<Scalars['Boolean']>;
  /** Addresses for the individual. */
  address?: Maybe<Array<Maybe<Address>>>;
  /** The date of birth for the individual. */
  birthDate?: Maybe<PartialDateTime>;
  /** A contact party (e.g. guardian, partner, friend) for the patient. */
  contact?: Maybe<Array<Maybe<PatientContact>>>;
  /** Indicates if the individual is deceased or not. */
  deceased?: Maybe<PatientDeceased>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The gender of a person used for administrative purposes. */
  gender?: Maybe<AdministrativeGenderCode>;
  /** Patient's nominated primary care provider. */
  generalPractitioner?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** An identifier for this patient. */
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Link to another patient resource that concerns the same actual person. */
  link?: Maybe<Array<Maybe<PatientLink>>>;
  /** Organization that is the custodian of the patient record. */
  managingOrganization?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Marital (civil) status of a patient. https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-MaritalStatus-1 */
  maritalStatus?: Maybe<CodeableConcept>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** Whether patient is part of a multiple birth. */
  multipleBirth?: Maybe<PatientMultipleBirth>;
  /** A name associated with the patient. */
  name: Array<Maybe<HumanName>>;
  /** Image of the patient. */
  photo?: Maybe<Array<Maybe<Attachment>>>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** A contact detail for the individual. */
  telecom?: Maybe<Array<Maybe<ContactPoint>>>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
};

/** A contact party (e.g. guardian, partner, friend) for the patient. */
export type PatientContact = {
  /** Address for the contact person. */
  address?: Maybe<Address>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The gender of a person used for administrative purposes. */
  gender?: Maybe<AdministrativeGenderCode>;
  /** A name associated with the contact person. */
  name: HumanName;
  /** Organization that is associated with the contact. */
  organization?: Maybe<ResourceReference>;
  /** The period during which this contact person or organization is valid to be contacted relating to this patient. */
  period?: Maybe<Period>;
  /** The nature of the relationship between a patient and a contact person for that patient. http://hl7.org/fhir/stu3/ValueSet/v2-0131 */
  relationship?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** A contact detail for the person. */
  telecom?: Maybe<Array<Maybe<ContactPoint>>>;
};

/** A continuation of Patient resources. */
export type PatientContinuationType = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of Patient resources. */
  resources: Array<Maybe<Patient>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

/** Indicates if the individual is deceased or not. */
export type PatientDeceased = {
  /** Indicates if the individual is deceased or not. */
  deceasedBoolean?: Maybe<Scalars['Boolean']>;
  /** Indicates when the patient died. */
  deceasedDateTime?: Maybe<PartialDateTime>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
};

/** Patient identifier. */
export type PatientIdentifierInputType = {
  /** Type of patient identifier. */
  type: PatientIdentifierTypeInputType;
  /** Unique identifier for the patient. */
  value: Scalars['String'];
};

export enum PatientIdentifierTypeInputType {
  DataProviderFhirId = 'DATA_PROVIDER_FHIR_ID',
  EhrPatientGuid = 'EHR_PATIENT_GUID',
  NhsNumber = 'NHS_NUMBER'
}

/** Link to another patient resource that concerns the same actual person. */
export type PatientLink = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The other patient or related person resource that the link refers to. */
  other: ResourceReference;
  /** The type of link between this patient resource and another patient resource. */
  type: PatientLinkTypeCode;
};

/** http://hl7.org/fhir/stu3/valueset-link-type.html */
export enum PatientLinkTypeCode {
  Refer = 'REFER',
  ReplacedBy = 'REPLACED_BY',
  Replaces = 'REPLACES',
  SeeAlso = 'SEE_ALSO'
}

/** Whether patient is part of a multiple birth. */
export type PatientMultipleBirth = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Whether patient is part of a multiple birth. */
  multipleBirthBoolean?: Maybe<Scalars['Boolean']>;
  /** Whether patient is part of a multiple birth. */
  multipleBirthInteger?: Maybe<Scalars['Int']>;
};

/** A time period defined by a start and end date/time. */
export type Period = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** End time with inclusive boundary, if not ongoing. */
  end?: Maybe<PartialDateTime>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Starting time with inclusive boundary. */
  start?: Maybe<PartialDateTime>;
};

/** Time range defined by start and end date/time */
export type PeriodInputGraphType = {
  /** End time with inclusive boundary, if not ongoing. */
  end?: Maybe<PartialDateTimeInput>;
  /** Starting time with inclusive boundary. */
  start?: Maybe<PartialDateTimeInput>;
};

/** https://www.hl7.org/fhir/R4/plandefinition.html */
export type PlanDefinition = {
  /** Action defined by the plan. */
  action?: Maybe<Array<Maybe<PlanDefinitionAction>>>;
  /** When the plan definition was approved by publisher. */
  approvalDate?: Maybe<PartialDateTime>;
  /** Who authored the content. */
  author?: Maybe<Array<Maybe<ContactDetail>>>;
  /** Name of the publisher (organization or individual). */
  contact?: Maybe<Array<Maybe<ContactDetail>>>;
  /** Use and/or publishing restrictions. */
  copyright?: Maybe<Scalars['String']>;
  /** Date last changed. */
  date?: Maybe<PartialDateTime>;
  /** Natural language description of the plan definition. */
  description?: Maybe<Scalars['String']>;
  /** Who edited the content. */
  editor?: Maybe<Array<Maybe<ContactDetail>>>;
  /** When the plan definition is expected to be used. */
  effectivePeriod?: Maybe<Period>;
  /** Who endorsed the content. */
  endorser?: Maybe<Array<Maybe<ContactDetail>>>;
  /** For testing purposes, not real usage. */
  experimental?: Maybe<Scalars['Boolean']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** What the plan is trying to accomplish. */
  goal?: Maybe<Array<Maybe<PlanDefinitionGoal>>>;
  /** Guidance for problems, interventions etc. */
  guidance?: Maybe<Array<Maybe<Guidance>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Additional identifier for the plan definition. */
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Intended jurisdiction for plan definition (if applicable). */
  jurisdiction?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** When the plan definition was last reviewed. */
  lastReviewDate?: Maybe<PartialDateTime>;
  /** Logic used by the plan definition. */
  library?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** Name for this plan definition (computer friendly). */
  name?: Maybe<Scalars['String']>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** Name of the publisher (organization or individual). */
  publisher?: Maybe<Scalars['String']>;
  /** Why this plan definition is defined. */
  purpose?: Maybe<Scalars['String']>;
  /** Questionnaires that can be used to record interventions and goal progress. */
  questionnaire?: Maybe<Array<Maybe<Questionnaire>>>;
  /** Additional documentation, citations. */
  relatedArtifact?: Maybe<Array<Maybe<RelatedArtifact>>>;
  /** Who reviewed the content. */
  reviewer?: Maybe<Array<Maybe<ContactDetail>>>;
  /** draft | active | retired | unknown */
  status: PlanDefinitionStatus;
  /** Subordinate title of the plan definition. */
  subTitle?: Maybe<Scalars['String']>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
  /** Name for this plan definition (human friendly). */
  title?: Maybe<Scalars['String']>;
  /** Keywords defined by the Care Plan Definition. */
  topic?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** order-set | clinical-protocol | eca-rule | workflow-definition */
  type?: Maybe<CodeableConcept>;
  /** Canonical identifier for this plan definition, represented as a URI (globally unique) */
  url?: Maybe<Scalars['String']>;
  /** Describes the clinical usage of the plan. */
  usage?: Maybe<Scalars['String']>;
  /** Describes the clinical usage of the plan. */
  useContext?: Maybe<Array<Maybe<UsageContext>>>;
  /** Business version of the plan definition. */
  version?: Maybe<Scalars['String']>;
};

/** https://www.hl7.org/fhir/R4/plandefinition-definitions.html#PlanDefinition.action */
export type PlanDefinitionAction = {
  /** A sub-action. */
  action?: Maybe<Array<Maybe<PlanDefinitionAction>>>;
  /** Code representing the meaning of the action or sub-model. */
  code?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** Brief description of the action. */
  description?: Maybe<Scalars['String']>;
  /** Supporting documentation for the intended performer of the action. */
  documentation?: Maybe<Array<Maybe<RelatedArtifact>>>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** ID of the Goal this action links to */
  goalId?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** User-visible prefix for the action (e.g. 1. or A.). */
  prefix?: Maybe<Scalars['String']>;
  /** Action priority. */
  priority?: Maybe<PlanDefinitionActionPriority>;
  /** Why the action should be performed. */
  reason?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system. */
  textEquivalent?: Maybe<Scalars['String']>;
  /** User-visible title. */
  title?: Maybe<Scalars['String']>;
};

export enum PlanDefinitionActionPriority {
  Asap = 'ASAP',
  Routine = 'ROUTINE',
  Stat = 'STAT',
  Urgent = 'URGENT'
}

/** A continuation of Plan Definition resources. */
export type PlanDefinitionContinuationType = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of Plan Definition resources. */
  resources: Array<Maybe<PlanDefinition>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

/** https://www.hl7.org/fhir/plandefinition-definitions.html#PlanDefinition.goal */
export type PlanDefinitionGoal = {
  /** What does the goal address. */
  addresses?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** Goal category. */
  category?: Maybe<CodeableConcept>;
  /** Code or text describing the goal. */
  description: CodeableConcept;
  /** Supporting documentation for the goal. */
  documentation?: Maybe<Array<Maybe<RelatedArtifact>>>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Goal priority. */
  priority?: Maybe<CodeableConcept>;
  /** When goal pursuit begins. */
  start?: Maybe<CodeableConcept>;
  /** Target outcome for the goal. */
  target?: Maybe<Array<Maybe<PlanDefinitionGoalTarget>>>;
};

/** https://www.hl7.org/fhir/plandefinition-definitions.html#PlanDefinition.goal.target */
export type PlanDefinitionGoalTarget = {
  /** The target value to be achieved. */
  detailCodeableConcept?: Maybe<CodeableConcept>;
  /** The target value to be achieved. */
  detailQuantity?: Maybe<Quantity>;
  /** The target value to be achieved. */
  detailRange?: Maybe<Range>;
  /** Reach goal within. */
  due?: Maybe<Scalars['String']>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The parameter whose value is to be tracked. */
  measure?: Maybe<CodeableConcept>;
};

export enum PlanDefinitionStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Retired = 'RETIRED',
  Unknown = 'UNKNOWN'
}

export enum PriorityCode {
  Asap = 'ASAP',
  Normal = 'NORMAL',
  Stat = 'STAT',
  Urgent = 'URGENT'
}

/** Who, What, When for a set of resources. */
export type Provenance = {
  /** Activity that occurred. */
  activity?: Maybe<CodeableConcept>;
  /** Actor involved. */
  agent: Array<Maybe<ProvenanceAgent>>;
  /** An entity used in this activity. */
  entity?: Maybe<Array<Maybe<ProvenanceEntity>>>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Where the activity occurred, if relevant. */
  location?: Maybe<ResourceReference>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** When the activity occurred. */
  occurredDateTime?: Maybe<PartialDateTime>;
  /** When the activity occurred. */
  occurredPeriod?: Maybe<Period>;
  /** Policy or plan the activity was defined by. */
  policy?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** Reason the activity is occurring. */
  reason?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** When the activity was recorded / updated. */
  recorded: PartialDateTime;
  /** Target Reference(s) (usually version specific). */
  target: Array<Maybe<ResourceReference>>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
};

/** Actor involved. */
export type ProvenanceAgent = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Who the agent is representing */
  onBehalfOf?: Maybe<ResourceReference>;
  /** What the agents role was. */
  role?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** How the agent participated. */
  type?: Maybe<CodeableConcept>;
  /** Who participated. */
  who: ResourceReference;
};

/** A continuation of Provenance resources. */
export type ProvenanceContinuationType = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of Provenance resources. */
  resources: Array<Provenance>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

/** An entity used in this activity. */
export type ProvenanceEntity = {
  /** Entity is attributed to this agent. */
  agent?: Maybe<Array<Maybe<ProvenanceAgent>>>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** The type of action taken on the entity. */
  role: Coding;
  /** Identity of entity. */
  what: ResourceReference;
};

/** A measured amount (or an amount that can potentially be measured). */
export type Quantity = {
  /** Coded form of the unit. */
  code?: Maybe<Scalars['String']>;
  /** < | <= | >= | > - how to understand the value. */
  comparator?: Maybe<QuantityComparatorCode>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** System that defines coded unit form. */
  system?: Maybe<Scalars['String']>;
  /** Unit representation. */
  unit?: Maybe<Scalars['String']>;
  /** Numerical value (with implicit precision). */
  value?: Maybe<Scalars['Decimal']>;
};

export enum QuantityComparatorCode {
  GreaterOrEqualTo = 'GREATER_OR_EQUAL_TO',
  GreaterThan = 'GREATER_THAN',
  LessOrEqualTo = 'LESS_OR_EQUAL_TO',
  LessThan = 'LESS_THAN'
}

export type Query = {
  /** EHR Platform (Data Provider) */
  ehr?: Maybe<Ehr>;
  /** Feature Toggles for System, User, and Organisation Context */
  featureToggles?: Maybe<Array<Maybe<FeatureToggle>>>;
  /** GP Connect (Data Provider) */
  gpConnect?: Maybe<GpConnect>;
  /** Leeds and York Partnership NHS Foundation Trust (Data Provider) */
  lypft?: Maybe<Lypft>;
  /** Authenticated User Details */
  user?: Maybe<User>;
  /** Yorkshire Humber Care Record (Data Provider) */
  yhcr?: Maybe<Yhcr>;
};


export type QueryYhcrArgs = {
  dataSourceProfile?: Maybe<DataSourceProfile>;
  reasonForAccess: ReasonForAccessCode;
};

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export type Questionnaire = {
  /** When the questionnaire was approved by publisher. */
  approvalDate?: Maybe<PartialDateTime>;
  /** Concept that represents the overall questionnaire. */
  code?: Maybe<Array<Maybe<Coding>>>;
  /** Contact details for the publisher. */
  contact?: Maybe<Array<Maybe<ContactDetail>>>;
  /** Use and/or publishing restrictions. */
  copyright?: Maybe<Scalars['String']>;
  /** Date last changed. */
  date?: Maybe<PartialDateTime>;
  /** Instantiates protocol or definition. */
  derivedFrom?: Maybe<Array<Maybe<ResourceReference>>>;
  /** Natural language description of the questionnaire. */
  description?: Maybe<Scalars['String']>;
  /** When the questionnaire is expected to be used. */
  effectivePeriod?: Maybe<Period>;
  /** For testing purposes, not real usage. */
  experimental?: Maybe<Scalars['Boolean']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Additional identifier for the questionnaire. */
  identifier: Array<Maybe<Identifier>>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Questions and sections within the Questionnaire. */
  item?: Maybe<Array<Maybe<QuestionnaireItem>>>;
  /** Intended jurisdiction for questionnaire (if applicable). */
  jurisdiction?: Maybe<Array<Maybe<CodeableConcept>>>;
  /** When the questionnaire was last reviewed. */
  lastReviewDate?: Maybe<PartialDateTime>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** Name for this questionnaire (computer friendly). */
  name?: Maybe<Scalars['String']>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** Name of the publisher (organization or individual). */
  publisher?: Maybe<Scalars['String']>;
  /** Why this questionnaire is defined. */
  purpose?: Maybe<Scalars['String']>;
  /** Why this questionnaire is defined. */
  status: QuestionnairePublicationStatus;
  /** Resource that can be subject of QuestionnaireResponse. */
  subjectType?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
  /** Name for this questionnaire (human friendly). */
  title?: Maybe<Scalars['String']>;
  /** Canonical identifier for this questionnaire, represented as a URI (globally unique). */
  url?: Maybe<Scalars['String']>;
  /** The context that the content is intended to support. */
  useContext?: Maybe<Array<Maybe<UsageContext>>>;
  /** Business version of the questionnaire. */
  version?: Maybe<Scalars['String']>;
};

/** Questions and sections within the Questionnaire. */
export type QuestionnaireItem = {
  /** Permitted answer. */
  answerOption?: Maybe<Array<Maybe<QuestionnaireItemAnswerOption>>>;
  /** Corresponding concept for this item in a terminology. */
  code?: Maybe<Array<Maybe<Coding>>>;
  /** ElementDefinition - details for the item. */
  definition?: Maybe<Scalars['String']>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Nested questionnaire response items. */
  item?: Maybe<Array<Maybe<QuestionnaireItem>>>;
  /** Unique id for item in questionnaire. */
  linkId?: Maybe<Scalars['String']>;
  /** No more than this many characters. */
  maxLength?: Maybe<Scalars['Int']>;
  /** E.g. '1(a)', '2.5.3'. */
  prefix?: Maybe<Scalars['String']>;
  /** Whether the item may repeat. */
  repeats?: Maybe<Scalars['Boolean']>;
  /** Whether the item must be included in data results. */
  required?: Maybe<Scalars['Boolean']>;
  /** Primary text for the item. */
  text?: Maybe<Scalars['String']>;
  /** Data type. */
  type: QuestionnaireItemTypeCode;
};

/** Permitted answer. */
export type QuestionnaireItemAnswerOption = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Whether option is selected by default */
  initialSelected?: Maybe<Scalars['Boolean']>;
  /** Answer value */
  valueCoding?: Maybe<Coding>;
  /** Answer value */
  valueString?: Maybe<Scalars['String']>;
};

export enum QuestionnaireItemTypeCode {
  Display = 'DISPLAY',
  Group = 'GROUP',
  QuestionBoolean = 'QUESTION_BOOLEAN',
  QuestionChoice = 'QUESTION_CHOICE',
  QuestionCoding = 'QUESTION_CODING',
  QuestionDate = 'QUESTION_DATE',
  QuestionDateDays = 'QUESTION_DATE_DAYS',
  QuestionDateTime = 'QUESTION_DATE_TIME',
  QuestionDecimal = 'QUESTION_DECIMAL',
  QuestionInteger = 'QUESTION_INTEGER',
  QuestionString = 'QUESTION_STRING',
  QuestionStringBbCode = 'QUESTION_STRING_BB_CODE',
  QuestionStringHtml = 'QUESTION_STRING_HTML',
  QuestionText = 'QUESTION_TEXT',
  QuestionTime = 'QUESTION_TIME',
  Unknown = 'UNKNOWN'
}

export enum QuestionnairePublicationStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Retired = 'RETIRED',
  Unknown = 'UNKNOWN'
}

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export type QuestionnaireResponse = {
  /** Person who received and recorded the answers. */
  author?: Maybe<ResourceReference>;
  /** Date the answers were gathered. */
  authored?: Maybe<PartialDateTime>;
  /** Request fulfilled by this QuestionnaireResponse. */
  basedOn?: Maybe<ResourceReference>;
  /** Encounter created as part of. */
  encounter?: Maybe<ResourceReference>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Unique id for this set of answers. */
  identifier?: Maybe<Identifier>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Groups and questions. */
  item?: Maybe<Array<Maybe<QuestionnaireResponseItem>>>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** Part of this action. */
  partOf?: Maybe<ResourceReference>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** Form being answered. */
  questionnaire?: Maybe<Questionnaire>;
  /** The person who answered the questions. */
  source?: Maybe<ResourceReference>;
  /** Why this questionnaire is defined. */
  status: QuestionnaireResponseStatus;
  /** The subject of the questions. */
  subject?: Maybe<ResourceReference>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
};

/** A continuation of Questionnaire Response resources. */
export type QuestionnaireResponseContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of Questionnaire Response resources. */
  resources: Array<Maybe<QuestionnaireResponse>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

/** Groups and questions. */
export type QuestionnaireResponseItem = {
  /** The response(s) to the question. */
  answer?: Maybe<Array<Maybe<QuestionnaireResponseItemAnswer>>>;
  /** ElementDefinition - details for the item. */
  definition?: Maybe<Scalars['String']>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Nested questionnaire response items. */
  item?: Maybe<Array<Maybe<QuestionnaireResponseItem>>>;
  /** Pointer to specific item from Questionnaire. */
  linkId?: Maybe<Scalars['String']>;
  /** Name for group or question text. */
  text?: Maybe<Scalars['String']>;
};

/** The response(s) to the question. */
export type QuestionnaireResponseItemAnswer = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Nested groups and questions. */
  item?: Maybe<Array<Maybe<QuestionnaireResponseItem>>>;
  /** Boolean Value. */
  valueBoolean?: Maybe<Scalars['Boolean']>;
  /** Coding Value. */
  valueCoding?: Maybe<Coding>;
  /** Date Time Value. */
  valueDateTime?: Maybe<PartialDateTime>;
  /** Decimal Value. */
  valueDecimal?: Maybe<Scalars['Decimal']>;
  /** Integer Value. */
  valueInteger?: Maybe<Scalars['Int']>;
  /** String Value. */
  valueString?: Maybe<Scalars['String']>;
};

/** A reference to a questionnaire response. */
export type QuestionnaireResponseReferenceInputType = {
  /** Primary identifier for the questionnaire response. */
  id: Scalars['String'];
  /** Alternative identifiers for the questionnaire response. */
  identifier?: Maybe<Array<IdentifierInputType>>;
  /** The patient that questionnaire response is applicable to. */
  patient: PatientIdentifierInputType;
  /** The template associated with the response data. */
  templateName: Scalars['String'];
};

export enum QuestionnaireResponseStatus {
  Amended = 'AMENDED',
  Completed = 'COMPLETED',
  EnteredInError = 'ENTERED_IN_ERROR',
  InProgress = 'IN_PROGRESS',
  Stopped = 'STOPPED'
}

/** A set of ordered Quantity values defined by a low and high limit. */
export type Range = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Low limit. */
  high?: Maybe<Quantity>;
  /** High limit. */
  low?: Maybe<Quantity>;
};

/** A relationship between two Quantity values expressed as a numerator and a denominator. */
export type Ratio = {
  denominator?: Maybe<Quantity>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  numerator?: Maybe<Quantity>;
};

/** The reason for accessing the patient record. */
export enum ReasonForAccessCode {
  /** Administration (Not patient-centric). */
  Administration = 'ADMINISTRATION',
  /** Analytics with access restricted to pseudonymised data. (Not patient-centric). */
  AnalyticsAccess = 'ANALYTICS_ACCESS',
  /** Direct care (Emergency). Access is in the context of a patient. */
  DirectCareEmergency = 'DIRECT_CARE_EMERGENCY',
  /** Direct care (Non-emergency). Access is in the context of a patient. */
  DirectCareNonEmergency = 'DIRECT_CARE_NON_EMERGENCY',
  /** Indirect care with the consent of the patient. Access is in the context of the patient. */
  IndirectCareInContext = 'INDIRECT_CARE_IN_CONTEXT',
  /** Indirect care not in the context of a patient. (Not patient-centric). */
  IndirectCareNotInContext = 'INDIRECT_CARE_NOT_IN_CONTEXT'
}

/** Related artifacts for a knowledge resource. */
export type RelatedArtifact = {
  /** Bibliographic citation for the artifact. */
  citation?: Maybe<Scalars['String']>;
  /** Brief description of the related artifact. */
  display?: Maybe<Scalars['String']>;
  /** What document is being referenced. */
  document?: Maybe<Attachment>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Short label. */
  label?: Maybe<Scalars['String']>;
  /** What resource is being referenced. */
  resource?: Maybe<ResourceReference>;
  /** RelatedArtifactType code. */
  type: RelatedArtifactType;
  /** Where the artifact can be accessed. */
  url?: Maybe<Scalars['String']>;
};

export enum RelatedArtifactType {
  Citation = 'CITATION',
  ComposedOf = 'COMPOSED_OF',
  DependsOn = 'DEPENDS_ON',
  DerivedFrom = 'DERIVED_FROM',
  Documentation = 'DOCUMENTATION',
  Justification = 'JUSTIFICATION',
  Predecessor = 'PREDECESSOR',
  Successor = 'SUCCESSOR'
}

/** General references between resources. */
export type ResourceReference = {
  /** Text alternative for the resource. */
  display: Scalars['String'];
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Business identifier for the referenced resource. */
  identifier?: Maybe<Identifier>;
  /** Literal reference, Relative, internal or absolute URL. */
  reference?: Maybe<Scalars['String']>;
  /** Type the reference refers to (e.g. Patient. */
  typeName: Scalars['String'];
};

/** Data that comes from a series of measurements taken by a device, which may have upper and lower limits. The data type also supports more than one dimension in the data. */
export type SampledData = {
  /** Decimal values with spaces, or "E" | "U" | "L" */
  data: Scalars['String'];
  /** Number of sample points at each time point */
  dimensions: Scalars['Int'];
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Multiply data by this before adding to origin */
  factor?: Maybe<Scalars['Decimal']>;
  /** Lower limit of detection */
  lowerLimit?: Maybe<Scalars['Decimal']>;
  /** Zero value and units */
  origin: Quantity;
  /** Number of milliseconds between samples */
  period?: Maybe<Scalars['Decimal']>;
  /** Upper limit of detection */
  upperLimit?: Maybe<Scalars['Decimal']>;
};

/** Users and / or teams that will be requested to sign a document */
export type SignatoryInputType = {
  /** User guid if Type is User OR Team Contact guid if Type is Team. */
  guid: Scalars['Guid'];
  name?: Maybe<Scalars['String']>;
  type: SignatoryType;
};

export enum SignatoryType {
  Team = 'TEAM',
  User = 'USER'
}

/** A slot of time on a schedule that may be available for booking appointments. */
export type Slot = {
  appointmentType?: Maybe<CodeableConcept>;
  comment?: Maybe<Scalars['String']>;
  end?: Maybe<PartialDateTime>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  identifier?: Maybe<Array<Maybe<Identifier>>>;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Metadata about the resource. */
  metadata: Metadata;
  overBooked?: Maybe<Scalars['Boolean']>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  schedule?: Maybe<ResourceReference>;
  serviceCategory?: Maybe<Array<Maybe<CodeableConcept>>>;
  serviceType?: Maybe<Array<Maybe<CodeableConcept>>>;
  specialty?: Maybe<Array<Maybe<CodeableConcept>>>;
  start?: Maybe<PartialDateTime>;
  status?: Maybe<SlotStatusCode>;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
};

export enum SlotStatusCode {
  Accepted = 'ACCEPTED',
  BusyUnavailable = 'BUSY_UNAVAILABLE',
  Error = 'ERROR',
  Free = 'FREE',
  Unconfirmed = 'UNCONFIRMED'
}

export enum SortOptionType {
  Alphabetical = 'ALPHABETICAL',
  MostRecent = 'MOST_RECENT'
}

/** https://www.hl7.org/fhir/STU3/task.html */
export type Task = {
  /** Task Creation Date */
  authoredOn?: Maybe<PartialDateTime>;
  /** NotYetDue, Due, Overdue, Suspended, Completed */
  businessStatus?: Maybe<CodeableConcept>;
  /** Task Type */
  code?: Maybe<CodeableConcept>;
  /** Human-readable explanation of task */
  description?: Maybe<Scalars['String']>;
  /** Start and end time of execution (start = due date, end = overdue date) */
  executionPeriod?: Maybe<Period>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** proposal | plan | order */
  intent: IntentCode;
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** The action to be performed */
  performerType: CodeableConcept;
  /** normal | urgent | asap | stat */
  priority?: Maybe<PriorityCode>;
  /** Who, What, When for a set of resources. */
  provenance?: Maybe<Array<Provenance>>;
  /** The requested performers for the task */
  requestedPerformer?: Maybe<CodeableConcept>;
  /** EHR task status */
  status: TaskStatusCode;
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>;
};

export enum TaskAssigneeFilter {
  Me = 'ME',
  MyTeams = 'MY_TEAMS'
}

/** A continuation of Task resources. */
export type TaskContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of Task resources. */
  resources: Array<Maybe<Task>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

export enum TaskSorting {
  AlphabeticalAsc = 'ALPHABETICAL_ASC',
  AlphabeticalDesc = 'ALPHABETICAL_DESC',
  StatusAndDateAsc = 'STATUS_AND_DATE_ASC',
  StatusAndDateDesc = 'STATUS_AND_DATE_DESC'
}

export enum TaskStatusCode {
  Cancelled = 'CANCELLED',
  Complete = 'COMPLETE',
  Due = 'DUE',
  NotYetDue = 'NOT_YET_DUE',
  Overdue = 'OVERDUE',
  Skipped = 'SKIPPED',
  Suspended = 'SUSPENDED'
}

/** A group of associated templates with a given display name. */
export type TemplateGroup = {
  /** Display name of the Template Group. */
  displayName: Scalars['String'];
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Metadata about the resource. */
  metadata: Metadata;
  /** The associated templates in the group. */
  templateNames: Array<Scalars['String']>;
};

/** A continuation of Template Groups. */
export type TemplateGroupContinuationType = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of Template Groups. */
  resources: Array<Maybe<TemplateGroup>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

/** The terminology item resource represents the terminology for an item in a particular coding system and version for a particular organisation. */
export type TerminologyItem = {
  /** Code for item */
  coding: Coding;
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** Metadata about the resource. */
  metadata: Metadata;
};

/** A continuation of TerminologyItem resources. */
export type TerminologyItemContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>;
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>;
  /** The continuation of TerminologyItem resources. */
  resources: Array<Maybe<TerminologyItem>>;
  /** The self cursor token. */
  selfCursorToken: Scalars['String'];
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>;
};

export type TimingRepeatType = {
  boundsDuration?: Maybe<Quantity>;
  boundsPeriod?: Maybe<Period>;
  boundsRange?: Maybe<Range>;
  count?: Maybe<Scalars['Int']>;
  countMax?: Maybe<Scalars['Int']>;
  daysOfWeek?: Maybe<DaysOfWeekType>;
  duration?: Maybe<Scalars['Decimal']>;
  durationMax?: Maybe<Scalars['Decimal']>;
  durationUnit?: Maybe<UnitsOfTimeType>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  frequency?: Maybe<Scalars['Int']>;
  frequencyMax?: Maybe<Scalars['Int']>;
  offSet?: Maybe<Scalars['Int']>;
  period?: Maybe<Scalars['Decimal']>;
  periodMax?: Maybe<Scalars['Decimal']>;
  periodUnit?: Maybe<UnitsOfTimeType>;
  timeOfDay?: Maybe<Array<Maybe<Scalars['String']>>>;
  when?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TimingType = {
  code?: Maybe<CodeableConcept>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  event?: Maybe<Array<Maybe<PartialDateTime>>>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  repeat?: Maybe<TimingRepeatType>;
};


export enum UnitsOfTimeType {
  /** Year */
  A = 'A',
  /** Day */
  D = 'D',
  /** Hour */
  H = 'H',
  /** Minute */
  Min = 'MIN',
  /** Month */
  Mo = 'MO',
  /** Second */
  S = 'S',
  /** Week */
  Wk = 'WK'
}

export type UsageContext = {
  code?: Maybe<Coding>;
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>;
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>;
  valueCodeableConcept?: Maybe<CodeableConcept>;
  valueQuantity?: Maybe<Quantity>;
  valueRange?: Maybe<Range>;
  valueReference?: Maybe<ResourceReference>;
};

/** Describes the context of use for a conformance or knowledge resource */
export type UsageContextInput = {
  code: CodingInput;
  valueCodeableConcept?: Maybe<CodeableConceptInput>;
};

export enum UseCode {
  Official = 'OFFICIAL',
  Secondary = 'SECONDARY',
  Temp = 'TEMP',
  Usual = 'USUAL'
}

/** The currently logged-in User Identity and Permissions. */
export type User = {
  /** The users contact coding */
  contact?: Maybe<Coding>;
  /** The Data Providers the User has access to. */
  dataProviderPermissions?: Maybe<Array<Maybe<DataProviderPermission>>>;
  /** The Resources and Operations the user has access to. */
  entityPermissions?: Maybe<Array<Maybe<EntityPermission>>>;
  /** The users full name. */
  fullName: Scalars['String'];
  /** Logical Id of the resource. */
  id: Scalars['ID'];
  /** The available Launch types the user can make. */
  launchPermissions?: Maybe<Array<Maybe<LaunchPermission>>>;
  /** Metadata about the resource. */
  metadata: Metadata;
  /** The users organisation unique identifier. */
  organisationIdentifier: Scalars['Guid'];
  /** The username. */
  userName: Scalars['String'];
};

export enum VerificationMethod {
  DirectObservation = 'DIRECT_OBSERVATION',
  Unknown = 'UNKNOWN'
}

/** Queries the YHCR System-of-Systems. */
export type Yhcr = {
  /** Allergies and Intolerances */
  allergyIntolerances?: Maybe<Array<Maybe<AllergyIntolerance>>>;
  /** Appointments */
  appointments?: Maybe<EncounterContinuation>;
  /** Diagnosis Detail */
  condition?: Maybe<Condition>;
  /** Diagnosis */
  conditions?: Maybe<Array<Maybe<Condition>>>;
  /** Data Availability Check */
  dataAvailability?: Maybe<DataAvailability>;
  /** Documents */
  documents?: Maybe<DocumentReferenceContinuation>;
  /** Hospital Stays */
  hospitalStays?: Maybe<Array<Maybe<Encounter>>>;
  /** Observations */
  observations?: Maybe<Array<Maybe<Observation>>>;
};


/** Queries the YHCR System-of-Systems. */
export type YhcrAllergyIntolerancesArgs = {
  nhsNumber: Scalars['String'];
};


/** Queries the YHCR System-of-Systems. */
export type YhcrAppointmentsArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  nhsNumber: Scalars['String'];
  status?: Maybe<Array<Maybe<EncounterStatusCode>>>;
};


/** Queries the YHCR System-of-Systems. */
export type YhcrConditionArgs = {
  id: Scalars['String'];
  nhsNumber: Scalars['String'];
};


/** Queries the YHCR System-of-Systems. */
export type YhcrConditionsArgs = {
  nhsNumber: Scalars['String'];
};


/** Queries the YHCR System-of-Systems. */
export type YhcrDataAvailabilityArgs = {
  nhsNumber: Scalars['String'];
};


/** Queries the YHCR System-of-Systems. */
export type YhcrDocumentsArgs = {
  count?: Maybe<Scalars['Int']>;
  cursorToken?: Maybe<Scalars['String']>;
  fromDate: Scalars['Date'];
  nhsNumber: Scalars['String'];
  toDate: Scalars['Date'];
};


/** Queries the YHCR System-of-Systems. */
export type YhcrHospitalStaysArgs = {
  nhsNumber: Scalars['String'];
};


/** Queries the YHCR System-of-Systems. */
export type YhcrObservationsArgs = {
  nhsNumber: Scalars['String'];
};
