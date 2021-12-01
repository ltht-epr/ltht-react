export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `DateTimeOffset` scalar type represents a date, time and offset from UTC. `DateTimeOffset` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTimeOffset: string
  Decimal: number
  /** A date in the format 'yyyy-MM-dd', e.g. '2020-01-31'. */
  Date: string
}

export type Query = {
  ehr?: Maybe<Ehr>
  features?: Maybe<Array<Maybe<FeatureToggle>>>
  gpConnect?: Maybe<GpConnect>
  lypft?: Maybe<Lypft>
  user?: Maybe<User>
  yhcr?: Maybe<Yhcr>
}

export type QueryYhcrArgs = {
  reasonForAccess: ReasonForAccessCode
  dataSourceProfile?: Maybe<DataSourceProfile>
}

/** Queries the LTHT EHR. */
export type Ehr = {
  allergyIntolerance?: Maybe<AllergyIntolerance>
  allergyIntolerances?: Maybe<AllergyIntoleranceContinuationType>
  auditPathway?: Maybe<AuditEventContinuation>
  condition?: Maybe<Condition>
  conditions?: Maybe<ConditionContinuation>
  guidance?: Maybe<Array<Maybe<Guidance>>>
  medications?: Maybe<MedicationRequestContinuationType>
  patient?: Maybe<Patient>
  questionnaire?: Maybe<QuestionnaireResponse>
  questionnaireLastCompleted?: Maybe<QuestionnaireResponse>
  tasks?: Maybe<TaskContinuation>
}

/** Queries the LTHT EHR. */
export type EhrAllergyIntoleranceArgs = {
  patientGuid: Scalars['String']
  id: Scalars['String']
}

/** Queries the LTHT EHR. */
export type EhrAllergyIntolerancesArgs = {
  patientGuid: Scalars['String']
  listType: Scalars['String']
  fhirVersion: Scalars['String']
  listScope: Scalars['String']
  cursorToken?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
}

/** Queries the LTHT EHR. */
export type EhrAuditPathwayArgs = {
  patientGuid: Scalars['String']
  pathwayType: Scalars['String']
  pathwayId: Scalars['String']
  auditProfile?: Maybe<Scalars['String']>
  cursorToken?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
}

/** Queries the LTHT EHR. */
export type EhrConditionArgs = {
  patientGuid: Scalars['String']
  id: Scalars['String']
}

/** Queries the LTHT EHR. */
export type EhrConditionsArgs = {
  patientGuid: Scalars['String']
  clinicalStatus?: Maybe<Array<Maybe<ConditionClinicalStatus>>>
  verificationStatus?: Maybe<Array<Maybe<ConditionVerificationStatus>>>
  admissionPeriod?: Maybe<ConditionAdmissionPeriodType>
  sortBy?: Maybe<SortOptionType>
  cursorToken?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
}

/** Queries the LTHT EHR. */
export type EhrGuidanceArgs = {
  patientGuid: Scalars['String']
  instanceSetGuid: Scalars['String']
  template: Scalars['String']
}

/** Queries the LTHT EHR. */
export type EhrMedicationsArgs = {
  patientGuid: Scalars['String']
  listType: Scalars['String']
  fhirVersion: Scalars['String']
  listScope: Scalars['String']
  cursorToken?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
}

/** Queries the LTHT EHR. */
export type EhrPatientArgs = {
  patientGuid: Scalars['String']
}

/** Queries the LTHT EHR. */
export type EhrQuestionnaireArgs = {
  patientGuid: Scalars['String']
  name: Scalars['String']
  instanceGuid: Scalars['String']
}

/** Queries the LTHT EHR. */
export type EhrQuestionnaireLastCompletedArgs = {
  patientGuid: Scalars['String']
  name: Scalars['String']
  setGuid: Scalars['String']
}

/** Queries the LTHT EHR. */
export type EhrTasksArgs = {
  patientGuid: Scalars['String']
  pathwayType?: Maybe<Scalars['String']>
  pathwayId?: Maybe<Scalars['String']>
  status?: Array<Maybe<TaskStatusCode>>
  cursorToken?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
}

/** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
export type AllergyIntolerance = {
  /** Date record was believed accurate. */
  assertedDate?: Maybe<PartialDateTime>
  /** Source of the information about the allergy. */
  asserter?: Maybe<ResourceReference>
  /** http://hl7.org/fhir/stu3/valueset-allergy-intolerance-category.html */
  category?: Maybe<Array<Maybe<AllergyIntoleranceCategoryCode>>>
  /** http://hl7.org/fhir/stu3/valueset-allergy-clinical-status.html */
  clinicalStatus?: Maybe<AllergyIntoleranceClinicalStatusCode>
  /** http://hl7.org/fhir/stu3/valueset-allergyintolerance-code.html */
  code?: Maybe<CodeableConcept>
  /** http://hl7.org/fhir/stu3/valueset-allergy-intolerance-criticality.html */
  criticality?: Maybe<AllergyIntoleranceCriticalityCode>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** Date(/time) of last known occurrence of a reaction. */
  lastOccurrence?: Maybe<PartialDateTime>
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional text not captured in other fields. */
  note?: Maybe<Array<Maybe<Annotation>>>
  /** When allergy or intolerance was identified. */
  onSet?: Maybe<AllergyIntoleranceOnSet>
  /** Adverse Reaction Events linked to exposure to substance. */
  reaction?: Maybe<Array<Maybe<AllergyIntoleranceReaction>>>
  /** Who recorded the sensitivity. */
  recorder?: Maybe<ResourceReference>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** http://hl7.org/fhir/stu3/valueset-allergy-intolerance-type.html */
  type?: Maybe<AllergyIntoleranceTypeCode>
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AllergyVerificationStatus-1 */
  verificationStatus: AllergyIntoleranceVerificationStatusCode
}

/** Metadata about the resource. */
export type Metadata = {
  /** The sources of the resource. */
  dataSources: Array<Maybe<Coding>>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Has data been redacted for this resource instance? */
  isRedacted: Scalars['Boolean']
  /** When the resource last changed - e.g. when the version changed. */
  lastUpdated?: Maybe<Scalars['DateTimeOffset']>
  /** When the resource was requested. */
  requestedWhen: Scalars['DateTimeOffset']
  /** Security tags for this resource instance. */
  security?: Maybe<Array<Maybe<Coding>>>
  /** To identify and relate resources to process and workflow. */
  tag?: Maybe<Array<Maybe<Coding>>>
  /** The version specific identifier. This value changes when the resource is created, updated, or deleted. */
  versionId?: Maybe<Scalars['String']>
}

/** Additional content defined by implementations. */
export type Extension = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Identifies the meaning of the extension. */
  url: Scalars['String']
  /** Value of extension (Attachment). */
  valueAttachment?: Maybe<Attachment>
  /** Value of extension (Boolean). */
  valueBoolean?: Maybe<Scalars['Boolean']>
  /** Value of extension (CodeableConcept). */
  valueCodeableConcept?: Maybe<CodeableConcept>
  /** Value of extension (String). */
  valueString?: Maybe<Scalars['String']>
}

/** A reference to one or more terminologies or ontologies but may also be defined by the provision of text. */
export type CodeableConcept = {
  /** Code defined by a terminology system. */
  coding?: Maybe<Array<Maybe<Coding>>>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Symbol in syntax defined by the system. */
  text?: Maybe<Scalars['String']>
}

/** A defined concept using a symbol from a code system. */
export type Coding = {
  /** Symbol in syntax defined by the system. */
  code?: Maybe<Scalars['String']>
  /** Representation defined by the system. */
  display?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Identity of the terminology system. */
  system?: Maybe<Scalars['String']>
  /** Version of the system - if relevant. */
  version?: Maybe<Scalars['String']>
}

/** Content in a format defined elsewhere. */
export type Attachment = {
  /** Mime type of the content, with charset etc. */
  contentType?: Maybe<Scalars['String']>
  /** Date attachment was first created. */
  creation?: Maybe<PartialDateTime>
  /** The attachment data. */
  data?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Hash of the data (sha-1, base64ed). */
  hash?: Maybe<Scalars['String']>
  /** Human language of the content (BCP-47). */
  language?: Maybe<Scalars['String']>
  /** Number of bytes of content (if url provided). */
  size?: Maybe<Scalars['Int']>
  /** Label to display in place of the data. */
  title?: Maybe<Scalars['String']>
  /** Uri where the data can be found. */
  url?: Maybe<Scalars['String']>
}

/** A Date + Time, Year, Year + Month, or just a Time. */
export type PartialDateTime = {
  /** Describes what the value represents – a full full or partial DateTime. */
  kind?: Maybe<PartialDateTimeKindCode>
  /** Represents a point in time, typically expressed as a date and time of day, relative to Coordinated Universal Time (UTC). */
  value?: Maybe<Scalars['DateTimeOffset']>
}

export enum PartialDateTimeKindCode {
  Year = 'YEAR',
  YearMonth = 'YEAR_MONTH',
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Time = 'TIME',
}

/** Text summary of the resource, for human interpretation. */
export type Narrative = {
  /** Limited xhtml content. */
  div: Scalars['String']
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** http://hl7.org/fhir/narrative-status */
  status?: Maybe<NarrativeStatusCode>
  /** Parsed text from Div. */
  text: Scalars['String']
}

export enum NarrativeStatusCode {
  Generated = 'GENERATED',
  Extensions = 'EXTENSIONS',
  Additional = 'ADDITIONAL',
  Empty = 'EMPTY',
}

/** A business identifier associated with a single object or entity within a given system. */
export type Identifier = {
  /** Organization that issued id (may be just text). */
  assigner?: Maybe<ResourceReference>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Time period when id is/was valid for use. */
  period?: Maybe<Period>
  /** The namespace for the identifier value. */
  system?: Maybe<Scalars['String']>
  /** http://hl7.org/fhir/stu3/valueset-identifier-type.html */
  type?: Maybe<CodeableConcept>
  /** http://hl7.org/fhir/stu3/valueset-identifier-use.html */
  use?: Maybe<IdentifierUseCode>
  /** The value that is unique. */
  value: Scalars['String']
}

export enum IdentifierUseCode {
  Usual = 'USUAL',
  Official = 'OFFICIAL',
  Temp = 'TEMP',
  Secondary = 'SECONDARY',
}

/** A time period defined by a start and end date/time. */
export type Period = {
  /** End time with inclusive boundary, if not ongoing. */
  end?: Maybe<PartialDateTime>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Starting time with inclusive boundary. */
  start?: Maybe<PartialDateTime>
}

/** General references between resources. */
export type ResourceReference = {
  /** Text alternative for the resource. */
  display: Scalars['String']
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Business identifier for the referenced resource. */
  identifier?: Maybe<Identifier>
  /** Literal reference, Relative, internal or absolute URL. */
  reference?: Maybe<Scalars['String']>
  /** Type the reference refers to (e.g. Patient. */
  typeName: Scalars['String']
}

export enum AllergyIntoleranceClinicalStatusCode {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Resolved = 'RESOLVED',
}

export enum AllergyIntoleranceVerificationStatusCode {
  Unconfirmed = 'UNCONFIRMED',
  Confirmed = 'CONFIRMED',
  Refuted = 'REFUTED',
  EnteredInError = 'ENTERED_IN_ERROR',
}

export enum AllergyIntoleranceTypeCode {
  Allergy = 'ALLERGY',
  Intolerance = 'INTOLERANCE',
}

export enum AllergyIntoleranceCategoryCode {
  Food = 'FOOD',
  Medication = 'MEDICATION',
  Environment = 'ENVIRONMENT',
  Biologic = 'BIOLOGIC',
}

export enum AllergyIntoleranceCriticalityCode {
  Low = 'LOW',
  High = 'HIGH',
  UnableToAssess = 'UNABLE_TO_ASSESS',
}

/** When allergy or intolerance was identified. */
export type AllergyIntoleranceOnSet = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  onSetAge?: Maybe<Quantity>
  onSetDateTime?: Maybe<PartialDateTime>
  onSetPeriod?: Maybe<Period>
  onSetRange?: Maybe<Range>
  onSetString?: Maybe<Scalars['String']>
}

/** A measured amount (or an amount that can potentially be measured). */
export type Quantity = {
  /** Coded form of the unit. */
  code?: Maybe<Scalars['String']>
  /** < | <= | >= | > - how to understand the value. */
  comparator?: Maybe<QuantityComparatorCode>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** System that defines coded unit form. */
  system?: Maybe<Scalars['String']>
  /** Unit representation. */
  unit?: Maybe<Scalars['String']>
  /** Numerical value (with implicit precision). */
  value?: Maybe<Scalars['Decimal']>
}

export enum QuantityComparatorCode {
  LessThan = 'LESS_THAN',
  LessOrEqualTo = 'LESS_OR_EQUAL_TO',
  GreaterOrEqualTo = 'GREATER_OR_EQUAL_TO',
  GreaterThan = 'GREATER_THAN',
}

/** A set of ordered Quantity values defined by a low and high limit. */
export type Range = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Low limit. */
  high?: Maybe<Quantity>
  /** High limit. */
  low?: Maybe<Quantity>
}

/** A text note which also contains information about who made the statement and when. */
export type Annotation = {
  /** Individual responsible for the annotation. */
  author?: Maybe<ResourceReference>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The annotation - text content. */
  text: Scalars['String']
  /** When the annotation was made. */
  time?: Maybe<PartialDateTime>
}

/** Adverse Reaction Events linked to exposure to substance. */
export type AllergyIntoleranceReaction = {
  /** Description of the event as a whole. */
  description?: Maybe<Scalars['String']>
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AllergyExposureRoute-1 */
  exposureRoute?: Maybe<CodeableConcept>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AllergyManifestation-1 */
  manifestation: Array<Maybe<CodeableConcept>>
  /** Additional text not captured in other fields. */
  note?: Maybe<Array<Maybe<Annotation>>>
  /** Date(/time) when manifestations showed. */
  onSet?: Maybe<PartialDateTime>
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ReactionEventSeverity-1 */
  severity?: Maybe<AllergyIntoleranceReactionSeverityCode>
  /** http://hl7.org/fhir/stu3/valueset-substance-code.html */
  substance?: Maybe<CodeableConcept>
}

export enum AllergyIntoleranceReactionSeverityCode {
  Mild = 'MILD',
  Moderate = 'MODERATE',
  Severe = 'SEVERE',
}

/** A continuation of Allergy Intolerance resources. */
export type AllergyIntoleranceContinuationType = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The continuation of Allergy Intolerance resources. */
  resources: Array<Maybe<AllergyIntolerance>>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
}

/** A continuation of Task resources. */
export type AuditEventContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The continuation of Audit Event resources. */
  resources: Array<Maybe<AuditEvent>>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
}

/** https://www.hl7.org/fhir/R4/auditevent.html */
export type AuditEvent = {
  /** Type of action performed during the event. */
  action?: Maybe<AuditEventAction>
  /** Type of action performed during the event. */
  agent: Array<Maybe<AuditEventAgent>>
  /** Data or objects used. */
  entity?: Maybe<Array<Maybe<AuditEventEntity>>>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Whether the event succeeded or failed. */
  outcome?: Maybe<AuditEventOutcome>
  /** Description of the event outcome. */
  outcomeDesc?: Maybe<Scalars['String']>
  /** When the activity occurred. */
  period?: Maybe<Period>
  /** The purposeOfUse of the event. */
  purposeOfEvent?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Time when the event was recorded. */
  recorded: PartialDateTime
  /** Audit Event Reporter. */
  source: AuditEventSource
  /** More specific type/id for the event. */
  subType?: Maybe<Array<Maybe<Coding>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Type/identifier of event. */
  type: Coding
}

export enum AuditEventAction {
  /** C */
  Create = 'CREATE',
  /** R */
  Read = 'READ',
  /** U */
  Update = 'UPDATE',
  /** D */
  Delete = 'DELETE',
  /** E */
  Execute = 'EXECUTE',
}

/** Actor involved in the event. */
export type AuditEventAgent = {
  /** Alternative User identity. */
  altId?: Maybe<Scalars['String']>
  /** Where. */
  location?: Maybe<ResourceReference>
  /** Type of media. */
  media?: Maybe<Coding>
  /** Human friendly name for the agent. */
  name?: Maybe<Scalars['String']>
  /** Logical network location for application activity. */
  network?: Maybe<AuditEventAgentNetwork>
  /** Policy that authorized event. */
  policy?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Reason given for this user. */
  purposeOfUse?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Whether user is initiator. */
  requestor: Scalars['Boolean']
  /** Agent role in the event. */
  role?: Maybe<Array<Maybe<CodeableConcept>>>
  /** How agent participated. */
  type?: Maybe<CodeableConcept>
  /** Identifier of who. */
  who?: Maybe<ResourceReference>
}

/** Logical network location for application activity. */
export type AuditEventAgentNetwork = {
  /** Identifier for the network access point of the user device. */
  address?: Maybe<Scalars['String']>
  /** The type of network access point. */
  type?: Maybe<AuditEventAgentNetworkType>
}

export enum AuditEventAgentNetworkType {
  MachineName = 'MACHINE_NAME',
  IpAddress = 'IP_ADDRESS',
  TelephoneNumber = 'TELEPHONE_NUMBER',
  EmailAddress = 'EMAIL_ADDRESS',
  Uri = 'URI',
}

/** Data or objects used. */
export type AuditEventEntity = {
  /** Alternative User identity. */
  description?: Maybe<Scalars['String']>
  /** Additional Information about the entity. */
  detail?: Maybe<Array<Maybe<AuditEventEntityDetail>>>
  /** Life-cycle stage for the entity. */
  lifecycle?: Maybe<Coding>
  /** Descriptor for entity. */
  name?: Maybe<Scalars['String']>
  /** Query parameters. */
  query?: Maybe<Scalars['String']>
  /** What role the entity played. */
  role?: Maybe<Coding>
  /** Security labels on the entity. */
  securityLabel?: Maybe<Array<Maybe<Coding>>>
  /** Type of entity involved. */
  type?: Maybe<Coding>
  /** Specific instance of resource. */
  what?: Maybe<ResourceReference>
}

/** Additional Information about the entity. */
export type AuditEventEntityDetail = {
  /** Name of the property. */
  type?: Maybe<Scalars['String']>
  /** Property value. */
  value?: Maybe<Scalars['String']>
}

export enum AuditEventOutcome {
  Success = 'SUCCESS',
  MinorFailure = 'MINOR_FAILURE',
  SeriousFailure = 'SERIOUS_FAILURE',
  MajorFailure = 'MAJOR_FAILURE',
}

/** Audit Event Reporter. */
export type AuditEventSource = {
  /** The identity of source detecting the event. */
  observer: ResourceReference
  /** Logical source location within the enterprise. */
  site?: Maybe<Scalars['String']>
  /** The type of source where event originated. */
  type?: Maybe<Array<Maybe<Coding>>>
}

export type Condition = {
  abatement?: Maybe<ConditionAbatement>
  assertedDate?: Maybe<PartialDateTime>
  asserter?: Maybe<ResourceReference>
  bodySite?: Maybe<Array<Maybe<CodeableConcept>>>
  category?: Maybe<Array<Maybe<CodeableConcept>>>
  clinicalStatus?: Maybe<ConditionClinicalStatus>
  code?: Maybe<CodeableConcept>
  context?: Maybe<ResourceReference>
  evidence?: Maybe<Array<Maybe<ConditionEvidence>>>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** Metadata about the resource. */
  metadata: Metadata
  onset?: Maybe<ConditionOnset>
  severity?: Maybe<CodeableConcept>
  stage?: Maybe<ConditionStage>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  verificationStatus?: Maybe<ConditionVerificationStatus>
}

export type ConditionAbatement = {
  age?: Maybe<Quantity>
  dateTime: Period
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
}

export enum ConditionClinicalStatus {
  Active = 'ACTIVE',
  Recurrence = 'RECURRENCE',
  Inactive = 'INACTIVE',
  Remission = 'REMISSION',
  Resolved = 'RESOLVED',
}

export type ConditionEvidence = {
  code?: Maybe<Array<Maybe<CodeableConcept>>>
  detail?: Maybe<ResourceReference>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
}

export type ConditionOnset = {
  age?: Maybe<Quantity>
  dateTime?: Maybe<PartialDateTime>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  period?: Maybe<Period>
  range?: Maybe<Range>
  string?: Maybe<Scalars['String']>
}

export type ConditionStage = {
  assessment?: Maybe<Array<Maybe<ResourceReference>>>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  summary?: Maybe<CodeableConcept>
}

export enum ConditionVerificationStatus {
  Provisional = 'PROVISIONAL',
  Differential = 'DIFFERENTIAL',
  Confirmed = 'CONFIRMED',
  Refuted = 'REFUTED',
  EnteredinError = 'ENTEREDIN_ERROR',
  Unknown = 'UNKNOWN',
}

/** A continuation of Condition resources. */
export type ConditionContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The continuation of Condition resources. */
  resources: Array<Maybe<Condition>>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
}

export enum ConditionAdmissionPeriodType {
  Current = 'CURRENT',
  Past = 'PAST',
}

export enum SortOptionType {
  Alphabetical = 'ALPHABETICAL',
  MostRecent = 'MOST_RECENT',
}

/** https://hl7.org/fhir/2018May/guidanceresponse.html */
export type Guidance = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** The guidance item. */
  note?: Maybe<Array<Maybe<Annotation>>>
  /** When the guidance response was processed. */
  occuranceDateTime?: Maybe<PartialDateTime>
  /** Describes the reason for the guidance response in coded or textual form. */
  reasonCode?: Maybe<CodeableConcept>
  /** The identifier of the request associated with this response, if any. */
  requestIdentifier?: Maybe<Identifier>
  /** http://hl7.org/fhir/ValueSet/guidance-response-status */
  status: GuidanceStatusCode
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
}

export enum GuidanceStatusCode {
  Success = 'SUCCESS',
  DataRequested = 'DATA_REQUESTED',
  DataRequired = 'DATA_REQUIRED',
  InProgress = 'IN_PROGRESS',
  Failure = 'FAILURE',
  EnteredInError = 'ENTERED_IN_ERROR',
}

/** A continuation of Medication Request resources. */
export type MedicationRequestContinuationType = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The continuation of Medication Request resources. */
  resources: Array<Maybe<MedicationRequest>>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
}

export type MedicationRequest = {
  authoredOn?: Maybe<PartialDateTime>
  category?: Maybe<CodeableConcept>
  context?: Maybe<ResourceReference>
  dosageInstruction?: Maybe<Array<Maybe<DosageType>>>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  intent?: Maybe<MedicationRequestIntentType>
  medicationReference?: Maybe<MedicationType>
  /** Metadata about the resource. */
  metadata: Metadata
  note?: Maybe<Array<Maybe<Annotation>>>
  priority?: Maybe<MedicationRequestPriorityType>
  reasonCode?: Maybe<Array<Maybe<CodeableConcept>>>
  reasonReference?: Maybe<ResourceReference>
  status?: Maybe<MedicationRequestStatusType>
  subject?: Maybe<ResourceReference>
  supportingInformation?: Maybe<Array<Maybe<ResourceReference>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
}

export enum MedicationRequestStatusType {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Draft = 'DRAFT',
  EnteredInError = 'ENTERED_IN_ERROR',
  OnHold = 'ON_HOLD',
  Stopped = 'STOPPED',
  Unknown = 'UNKNOWN',
}

export enum MedicationRequestIntentType {
  Proposal = 'PROPOSAL',
  Plan = 'PLAN',
  Order = 'ORDER',
  InstanceOrder = 'INSTANCE_ORDER',
}

export enum MedicationRequestPriorityType {
  /** Routine */
  Routine = 'ROUTINE',
  /** Urgent */
  Urgent = 'URGENT',
  /** Stat */
  Stat = 'STAT',
  /** ASAP */
  Asap = 'ASAP',
}

export type MedicationType = {
  code?: Maybe<CodeableConcept>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  form?: Maybe<CodeableConcept>
  isBrand?: Maybe<Scalars['Boolean']>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
}

export type DosageType = {
  additionalInstruction?: Maybe<Array<Maybe<CodeableConcept>>>
  asNeededBoolean?: Maybe<Scalars['Boolean']>
  asNeededCodeableConcept?: Maybe<CodeableConcept>
  doseQuantity?: Maybe<Quantity>
  doseRange?: Maybe<Range>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  maxDosePerAdministration?: Maybe<Quantity>
  maxDosePerPeriod?: Maybe<Range>
  method?: Maybe<CodeableConcept>
  patientInstruction?: Maybe<Scalars['String']>
  rateQuantity?: Maybe<Quantity>
  rateRange?: Maybe<Range>
  rateRatio?: Maybe<Ratio>
  route?: Maybe<CodeableConcept>
  sequence?: Maybe<Scalars['Int']>
  site?: Maybe<CodeableConcept>
  text?: Maybe<Scalars['String']>
  timing?: Maybe<TimingType>
}

export type TimingType = {
  code?: Maybe<CodeableConcept>
  event?: Maybe<Array<Maybe<PartialDateTime>>>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  repeat?: Maybe<TimingRepeatType>
}

export type TimingRepeatType = {
  boundsDuration?: Maybe<Quantity>
  boundsPeriod?: Maybe<Period>
  boundsRange?: Maybe<Range>
  count?: Maybe<Scalars['Int']>
  countMax?: Maybe<Scalars['Int']>
  daysOfWeek?: Maybe<DaysOfWeekType>
  duration?: Maybe<Scalars['Decimal']>
  durationMax?: Maybe<Scalars['Decimal']>
  durationUnit?: Maybe<UnitsOfTimeType>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  frequency?: Maybe<Scalars['Int']>
  frequencyMax?: Maybe<Scalars['Int']>
  offSet?: Maybe<Scalars['Int']>
  period?: Maybe<Scalars['Decimal']>
  periodMax?: Maybe<Scalars['Decimal']>
  periodUnit?: Maybe<UnitsOfTimeType>
  timeOfDay?: Maybe<Array<Maybe<Scalars['String']>>>
  when?: Maybe<Array<Maybe<Scalars['String']>>>
}

export enum UnitsOfTimeType {
  /** Second */
  S = 'S',
  /** Minute */
  Min = 'MIN',
  /** Hour */
  H = 'H',
  /** Day */
  D = 'D',
  /** Week */
  Wk = 'WK',
  /** Month */
  Mo = 'MO',
  /** Year */
  A = 'A',
}

export enum DaysOfWeekType {
  /** Monday */
  Mon = 'MON',
  /** Tuesday */
  Tue = 'TUE',
  /** Wednesday */
  Wed = 'WED',
  /** Thursday */
  Thu = 'THU',
  /** Friday */
  Fri = 'FRI',
  /** Saturday */
  Sat = 'SAT',
  /** Sunday */
  Sun = 'SUN',
}

/** A relationship between two Quantity values expressed as a numerator and a denominator. */
export type Ratio = {
  denominator?: Maybe<Quantity>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  numerator?: Maybe<Quantity>
}

/** The patient resource represents the patient involved in the provision of healthcare related services. */
export type Patient = {
  /** Whether this patient's record is in active use. */
  active?: Maybe<Scalars['Boolean']>
  /** Addresses for the individual. */
  address?: Maybe<Array<Maybe<Address>>>
  /** The date of birth for the individual. */
  birthDate?: Maybe<PartialDateTime>
  /** A contact party (e.g. guardian, partner, friend) for the patient. */
  contact?: Maybe<Array<Maybe<PatientContact>>>
  /** Indicates if the individual is deceased or not. */
  deceased?: Maybe<PatientDeceased>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The gender of a person used for administrative purposes. */
  gender?: Maybe<AdministrativeGenderCode>
  /** Patient's nominated primary care provider. */
  generalPractitioner?: Maybe<Array<Maybe<ResourceReference>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** An identifier for this patient. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** Link to another patient resource that concerns the same actual person. */
  link?: Maybe<Array<Maybe<PatientLink>>>
  /** Organization that is the custodian of the patient record. */
  managingOrganization?: Maybe<Array<Maybe<ResourceReference>>>
  /** Marital (civil) status of a patient. https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-MaritalStatus-1 */
  maritalStatus?: Maybe<CodeableConcept>
  /** Metadata about the resource. */
  metadata: Metadata
  /** Whether patient is part of a multiple birth. */
  multipleBirth?: Maybe<PatientMultipleBirth>
  /** A name associated with the patient. */
  name: Array<Maybe<HumanName>>
  /** Image of the patient. */
  photo?: Maybe<Array<Maybe<Attachment>>>
  /** A contact detail for the individual. */
  telecom?: Maybe<Array<Maybe<ContactPoint>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
}

/** A name of a human with text, parts and usage information. */
export type HumanName = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Family name (often called 'Surname'). */
  family?: Maybe<Scalars['String']>
  /** Given names (not always 'first'). Includes middle names. This repeating element order: Given Names appear in the correct order for presenting the name. */
  given?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Time period when name was/is in use. */
  period?: Maybe<Period>
  /** Parts that come before the name. This repeating element order: Prefixes appear in the correct order for presenting the name. */
  prefix?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Parts that come after the name. This repeating element order: Suffixes appear in the correct order for presenting the name. */
  suffix?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Text representation of the full name. */
  text?: Maybe<Scalars['String']>
  /** http://hl7.org/fhir/stu3/valueset-name-use.html */
  use?: Maybe<HumanNameUseCode>
}

/** http://hl7.org/fhir/stu3/valueset-name-use.html */
export enum HumanNameUseCode {
  Usual = 'USUAL',
  Official = 'OFFICIAL',
  Temp = 'TEMP',
  Nickname = 'NICKNAME',
  Anonymous = 'ANONYMOUS',
  Old = 'OLD',
  Maiden = 'MAIDEN',
}

/** Details for all kinds of technology-mediated contact points for a person or organization, including telephone, email, etc. */
export type ContactPoint = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Time period when name was/is in use. */
  period?: Maybe<Period>
  /** Specify preferred order of use (1 = highest). */
  rank?: Maybe<Scalars['Int']>
  /** http://hl7.org/fhir/stu3/valueset-contact-point-system.html */
  system?: Maybe<ContactPointSystemCode>
  /** http://hl7.org/fhir/stu3/valueset-contact-point-use.html */
  use?: Maybe<ContactPointUseCode>
  /** The actual contact point details. */
  value?: Maybe<Scalars['String']>
}

/** http://hl7.org/fhir/stu3/valueset-contact-point-system.html */
export enum ContactPointSystemCode {
  Phone = 'PHONE',
  Fax = 'FAX',
  Email = 'EMAIL',
  Pager = 'PAGER',
  Url = 'URL',
  Sms = 'SMS',
  Other = 'OTHER',
}

/** http://hl7.org/fhir/stu3/valueset-contact-point-use.html */
export enum ContactPointUseCode {
  Home = 'HOME',
  Work = 'WORK',
  Temp = 'TEMP',
  Old = 'OLD',
  Mobile = 'MOBILE',
}

/** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AdministrativeGender-1l */
export enum AdministrativeGenderCode {
  Male = 'MALE',
  Female = 'FEMALE',
  Other = 'OTHER',
  Unknown = 'UNKNOWN',
}

/** Indicates if the individual is deceased or not. */
export type PatientDeceased = {
  /** Indicates if the individual is deceased or not. */
  deceasedBoolean?: Maybe<Scalars['Boolean']>
  /** Indicates when the patient died. */
  deceasedDateTime?: Maybe<PartialDateTime>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
}

/** An address expressed using postal conventions (as opposed to GPS or other location definition formats). This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery. There are a variety of postal address formats defined around the world. */
export type Address = {
  /** Name of city, town etc. */
  city?: Maybe<Scalars['String']>
  /** Country (e.g. can be ISO 3166 2 or 3 letter code). */
  country?: Maybe<Scalars['String']>
  /** District name (aka county). */
  district?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Street name, number, direction & P.O. Box etc. This repeating element order: The order in which lines should appear in an address label. */
  line?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Time period when address was/is in use. */
  period?: Maybe<Period>
  /** Postal code for area. */
  postalCode?: Maybe<Scalars['String']>
  /** Sub-unit of country (abbreviations ok). */
  state?: Maybe<Scalars['String']>
  /** Text representation of the address. */
  text?: Maybe<Scalars['String']>
  /** http://hl7.org/fhir/stu3/valueset-address-type.html */
  type?: Maybe<AddressTypeCode>
  /** http://hl7.org/fhir/stu3/valueset-address-use.html */
  use?: Maybe<AddressUseCode>
}

/** http://hl7.org/fhir/stu3/valueset-address-use.html */
export enum AddressUseCode {
  Home = 'HOME',
  Work = 'WORK',
  Temp = 'TEMP',
  Old = 'OLD',
}

/** http://hl7.org/fhir/stu3/valueset-address-type.html */
export enum AddressTypeCode {
  Postal = 'POSTAL',
  Physical = 'PHYSICAL',
  Both = 'BOTH',
}

/** Whether patient is part of a multiple birth. */
export type PatientMultipleBirth = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Whether patient is part of a multiple birth. */
  multipleBirthBoolean?: Maybe<Scalars['Boolean']>
  /** Whether patient is part of a multiple birth. */
  multipleBirthInteger?: Maybe<Scalars['Int']>
}

/** A contact party (e.g. guardian, partner, friend) for the patient. */
export type PatientContact = {
  /** Address for the contact person. */
  address?: Maybe<Address>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The gender of a person used for administrative purposes. */
  gender?: Maybe<AdministrativeGenderCode>
  /** A name associated with the contact person. */
  name: HumanName
  /** Organization that is associated with the contact. */
  organization?: Maybe<ResourceReference>
  /** The period during which this contact person or organization is valid to be contacted relating to this patient. */
  period?: Maybe<Period>
  /** The nature of the relationship between a patient and a contact person for that patient. http://hl7.org/fhir/stu3/ValueSet/v2-0131 */
  relationship?: Maybe<Array<Maybe<CodeableConcept>>>
  /** A contact detail for the person. */
  telecom?: Maybe<Array<Maybe<ContactPoint>>>
}

/** Link to another patient resource that concerns the same actual person. */
export type PatientLink = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The other patient or related person resource that the link refers to. */
  other: ResourceReference
  /** The type of link between this patient resource and another patient resource. */
  type: PatientLinkTypeCode
}

/** http://hl7.org/fhir/stu3/valueset-link-type.html */
export enum PatientLinkTypeCode {
  ReplacedBy = 'REPLACED_BY',
  Replaces = 'REPLACES',
  Refer = 'REFER',
  SeeAlso = 'SEE_ALSO',
}

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export type QuestionnaireResponse = {
  /** Person who received and recorded the answers. */
  author?: Maybe<ResourceReference>
  /** Date the answers were gathered. */
  authored?: Maybe<PartialDateTime>
  /** Request fulfilled by this QuestionnaireResponse. */
  basedOn?: Maybe<ResourceReference>
  /** Encounter created as part of. */
  encounter?: Maybe<ResourceReference>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Unique id for this set of answers. */
  identifier?: Maybe<Identifier>
  /** Groups and questions. */
  item?: Maybe<Array<Maybe<QuestionnaireResponseItem>>>
  /** Metadata about the resource. */
  metadata: Metadata
  /** Part of this action. */
  partOf?: Maybe<ResourceReference>
  /** Form being answered. */
  questionnaire: Questionnaire
  /** The person who answered the questions. */
  source?: Maybe<ResourceReference>
  /** Why this questionnaire is defined. */
  status: QuestionnaireResponseStatus
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
}

/** Groups and questions. */
export type QuestionnaireResponseItem = {
  /** The response(s) to the question. */
  answer?: Maybe<Array<Maybe<QuestionnaireResponseItemAnswer>>>
  /** ElementDefinition - details for the item. */
  definition?: Maybe<Scalars['String']>
  /** Nested questionnaire response items. */
  item?: Maybe<Array<Maybe<QuestionnaireResponseItem>>>
  /** Pointer to specific item from Questionnaire. */
  linkId?: Maybe<Scalars['String']>
  /** Name for group or question text. */
  text?: Maybe<Scalars['String']>
}

/** The response(s) to the question. */
export type QuestionnaireResponseItemAnswer = {
  /** Nested groups and questions. */
  item?: Maybe<Array<Maybe<QuestionnaireResponseItem>>>
  /** Boolean Value. */
  valueBoolean?: Maybe<Scalars['Boolean']>
  /** Date Time Value. */
  valueDateTime?: Maybe<PartialDateTime>
  /** String Value. */
  valueString?: Maybe<Scalars['String']>
}

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export type Questionnaire = {
  /** When the questionnaire was approved by publisher. */
  approvalDate?: Maybe<PartialDateTime>
  /** Concept that represents the overall questionnaire. */
  code?: Maybe<Array<Maybe<Coding>>>
  /** Contact details for the publisher. */
  contact?: Maybe<Array<Maybe<ContactDetail>>>
  /** Use and/or publishing restrictions. */
  copyright?: Maybe<Scalars['String']>
  /** Date last changed. */
  date?: Maybe<PartialDateTime>
  /** Instantiates protocol or definition. */
  derivedFrom?: Maybe<Array<Maybe<ResourceReference>>>
  /** Natural language description of the questionnaire. */
  description?: Maybe<Scalars['String']>
  /** When the questionnaire is expected to be used. */
  effectivePeriod?: Maybe<Period>
  /** For testing purposes, not real usage. */
  experimental?: Maybe<Scalars['Boolean']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Additional identifier for the questionnaire. */
  identifier: Array<Maybe<Identifier>>
  /** Questions and sections within the Questionnaire. */
  item?: Maybe<Array<Maybe<QuestionnaireItem>>>
  /** Intended jurisdiction for questionnaire (if applicable). */
  jurisdiction?: Maybe<Array<Maybe<CodeableConcept>>>
  /** When the questionnaire was last reviewed. */
  lastReviewDate?: Maybe<PartialDateTime>
  /** Metadata about the resource. */
  metadata: Metadata
  /** Name for this questionnaire (computer friendly). */
  name?: Maybe<Scalars['String']>
  /** Name of the publisher (organization or individual). */
  publisher?: Maybe<Scalars['String']>
  /** Why this questionnaire is defined. */
  purpose?: Maybe<Scalars['String']>
  /** Why this questionnaire is defined. */
  status: QuestionnairePublicationStatus
  /** Resource that can be subject of QuestionnaireResponse. */
  subjectType?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Name for this questionnaire (human friendly). */
  title?: Maybe<Scalars['String']>
  /** Canonical identifier for this questionnaire, represented as a URI (globally unique). */
  url?: Maybe<Scalars['String']>
  /** The context that the content is intended to support. */
  useContext?: Maybe<Array<Maybe<UsageContext>>>
  /** Business version of the questionnaire. */
  version?: Maybe<Scalars['String']>
}

/** The ContactDetail structure defines general contact details. */
export type ContactDetail = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Name of an individual to contact. */
  name?: Maybe<Scalars['String']>
  /** Contact details for individual or organization. */
  telecom?: Maybe<Array<Maybe<ContactPoint>>>
}

/** Questions and sections within the Questionnaire. */
export type QuestionnaireItem = {
  /** Corresponding concept for this item in a terminology. */
  code?: Maybe<Array<Maybe<Coding>>>
  /** ElementDefinition - details for the item. */
  definition?: Maybe<Scalars['String']>
  /** Nested questionnaire response items. */
  item?: Maybe<Array<Maybe<QuestionnaireItem>>>
  /** Unique id for item in questionnaire. */
  linkId?: Maybe<Scalars['String']>
  /** E.g. '1(a)', '2.5.3'. */
  prefix?: Maybe<Scalars['String']>
  /** Whether the item may repeat. */
  repeats?: Maybe<Scalars['Boolean']>
  /** Whether the item must be included in data results. */
  required?: Maybe<Scalars['Boolean']>
  /** Primary text for the item. */
  text?: Maybe<Scalars['String']>
  /** Data type. */
  type: QuestionnaireItemTypeCode
}

export enum QuestionnaireItemTypeCode {
  Group = 'GROUP',
  Display = 'DISPLAY',
  QuestionBoolean = 'QUESTION_BOOLEAN',
  QuestionDate = 'QUESTION_DATE',
  QuestionString = 'QUESTION_STRING',
  QuestionStringBbCode = 'QUESTION_STRING_BB_CODE',
  QuestionStringHtml = 'QUESTION_STRING_HTML',
}

export enum QuestionnairePublicationStatus {
  Draft = 'DRAFT',
  Active = 'ACTIVE',
  Retired = 'RETIRED',
  Unknown = 'UNKNOWN',
}

/** The UsageContext structure defines the context of use for a module. */
export type UsageContext = {
  /** Type of context being specified. */
  code?: Maybe<Coding>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** CodeableConcept Value. */
  valueCodeableConcept?: Maybe<CodeableConcept>
  /** Quantity Value. */
  valueQuantity?: Maybe<Quantity>
  /** Range Value. */
  valueRange?: Maybe<Range>
  /** Reference Value. */
  valueReference?: Maybe<ResourceReference>
}

export enum QuestionnaireResponseStatus {
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
  Amended = 'AMENDED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Stopped = 'STOPPED',
}

/** A continuation of Task resources. */
export type TaskContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The continuation of Task resources. */
  resources: Array<Maybe<Task>>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
}

/** https://www.hl7.org/fhir/STU3/task.html */
export type Task = {
  /** Task Creation Date */
  authoredOn?: Maybe<PartialDateTime>
  /** NotYetDue, Due, Overdue, Suspended, Completed */
  businessStatus?: Maybe<CodeableConcept>
  /** Task Type */
  code?: Maybe<CodeableConcept>
  /** Human-readable explanation of task */
  description?: Maybe<Scalars['String']>
  /** Start and end time of execution (start = due date, end = overdue date) */
  executionPeriod?: Maybe<Period>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** proposal | plan | order */
  intent: IntentCode
  /** Metadata about the resource. */
  metadata: Metadata
  /** The action to be performed */
  performerType: CodeableConcept
  /** normal | urgent | asap | stat */
  priority?: Maybe<PriorityCode>
  /** EHR task status */
  status: TaskStatusCode
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
}

export enum IntentCode {
  Proposal = 'PROPOSAL',
  Plan = 'PLAN',
  Order = 'ORDER',
}

export enum PriorityCode {
  Normal = 'NORMAL',
  Urgent = 'URGENT',
  Asap = 'ASAP',
  Stat = 'STAT',
}

export enum TaskStatusCode {
  NotYetDue = 'NOT_YET_DUE',
  Due = 'DUE',
  Overdue = 'OVERDUE',
  Complete = 'COMPLETE',
  Suspended = 'SUSPENDED',
  Cancelled = 'CANCELLED',
  Skipped = 'SKIPPED',
}

/** Queries the GP Connect system. */
export type GpConnect = {
  dataAvailability?: Maybe<DataAvailability>
}

/** Queries the GP Connect system. */
export type GpConnectDataAvailabilityArgs = {
  nhsNumber: Scalars['String']
}

/** Provides information on the availability of data from a given Provider for the current User. */
export type DataAvailability = {
  /** The sources of the available data. */
  dataSources?: Maybe<Array<Maybe<Coding>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
}

/** Queries the LYPFT EHR. */
export type Lypft = {
  allergyIntolerances?: Maybe<Array<Maybe<AllergyIntolerance>>>
  appointments?: Maybe<EncounterContinuation>
  carePlans?: Maybe<Array<Maybe<CarePlan>>>
  careTeams?: Maybe<Array<Maybe<EpisodeOfCare>>>
  communityTreatmentOrders?: Maybe<Array<Maybe<LypftCommunityTreatmentOrder>>>
  dataAvailability?: Maybe<DataAvailability>
  documents?: Maybe<Array<Maybe<DocumentReference>>>
  flags?: Maybe<Array<Maybe<Flag>>>
  hospitalStays?: Maybe<Array<Maybe<Encounter>>>
}

/** Queries the LYPFT EHR. */
export type LypftAllergyIntolerancesArgs = {
  nhsNumber: Scalars['String']
  clinicalStatus?: Maybe<Array<Maybe<AllergyIntoleranceClinicalStatusCode>>>
}

/** Queries the LYPFT EHR. */
export type LypftAppointmentsArgs = {
  nhsNumber: Scalars['String']
  status?: Maybe<Array<Maybe<EncounterStatusCode>>>
  cursorToken?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
}

/** Queries the LYPFT EHR. */
export type LypftCarePlansArgs = {
  nhsNumber: Scalars['String']
}

/** Queries the LYPFT EHR. */
export type LypftCareTeamsArgs = {
  nhsNumber: Scalars['String']
}

/** Queries the LYPFT EHR. */
export type LypftCommunityTreatmentOrdersArgs = {
  nhsNumber: Scalars['String']
}

/** Queries the LYPFT EHR. */
export type LypftDataAvailabilityArgs = {
  nhsNumber: Scalars['String']
}

/** Queries the LYPFT EHR. */
export type LypftDocumentsArgs = {
  nhsNumber: Scalars['String']
}

/** Queries the LYPFT EHR. */
export type LypftFlagsArgs = {
  nhsNumber: Scalars['String']
}

/** Queries the LYPFT EHR. */
export type LypftHospitalStaysArgs = {
  nhsNumber: Scalars['String']
}

/** A continuation of Encounter resources. */
export type EncounterContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The continuation of Encounter resources. */
  resources: Array<Maybe<Encounter>>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
}

/** The encounter resource represents an encounter between a care professional and the patient (or patient's record). */
export type Encounter = {
  /** The set of accounts that may be used for billing for this Encounter. */
  account?: Maybe<ResourceReference>
  /** The appointment that scheduled this encounter. */
  appointment?: Maybe<ResourceReference>
  /** http://hl7.org/fhir/stu3/v3/ActEncounterCode/vs.html */
  class?: Maybe<Coding>
  /** List of past encounter classes. */
  classHistory?: Maybe<Array<Maybe<EncounterClassHistory>>>
  /** The list of diagnosis relevant to this encounter. */
  diagnosis?: Maybe<Array<Maybe<EncounterDiagnosis>>>
  /** Episode(s) of care that this encounter should be recorded against. */
  episodeOfCare?: Maybe<Array<Maybe<ResourceReference>>>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** AuthDetails about the admission to a healthcare service. */
  hospitalization?: Maybe<EncounterHospitalisation>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** The ReferralRequest that initiated this encounter. */
  incomingReferral?: Maybe<Array<Maybe<ResourceReference>>>
  /** Quantity of time the encounter lasted (less time absent). */
  length?: Maybe<Quantity>
  /** List of locations where the patient has been. */
  location?: Maybe<Array<Maybe<EncounterLocation>>>
  /** Metadata about the resource. */
  metadata: Metadata
  /** http://hl7.org/fhir/stu3/v3/ActPriority/vs.html */
  participant?: Maybe<Array<Maybe<EncounterParticipant>>>
  /** Another Encounter this encounter is part of. */
  partOf?: Maybe<ResourceReference>
  /** The start and end time of the encounter. */
  period?: Maybe<Period>
  /** http://hl7.org/fhir/stu3/v3/ActPriority/vs.html */
  priority?: Maybe<CodeableConcept>
  /** http://hl7.org/fhir/stu3/valueset-encounter-reason.html */
  reason?: Maybe<Array<Maybe<CodeableConcept>>>
  /** The custodian organization of this Encounter record. */
  serviceProvider?: Maybe<ResourceReference>
  /** http://hl7.org/fhir/stu3/valueset-encounter-status.html */
  status?: Maybe<EncounterStatusCode>
  /** List of past encounter statuses. */
  statusHistory?: Maybe<Array<Maybe<EncounterStatusHistory>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** http://hl7.org/fhir/stu3/valueset-encounter-type.html */
  type?: Maybe<Array<Maybe<CodeableConcept>>>
}

export enum EncounterStatusCode {
  Planned = 'PLANNED',
  Arrived = 'ARRIVED',
  Triaged = 'TRIAGED',
  InProgress = 'IN_PROGRESS',
  OnLeave = 'ON_LEAVE',
  Finished = 'FINISHED',
  Cancelled = 'CANCELLED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Unknown = 'UNKNOWN',
}

/** List of past encounter statuses. */
export type EncounterStatusHistory = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The time that the episode was in the specified status. */
  period: Period
  /** http://hl7.org/fhir/stu3/valueset-encounter-status.html */
  status?: Maybe<EncounterStatusCode>
}

/** List of past encounter classes. */
export type EncounterClassHistory = {
  /** http://hl7.org/fhir/stu3/v3/ActEncounterCode/vs.html */
  class: Coding
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The time that the episode was in the specified status. */
  period: Period
}

/** List of participants involved in the encounter. */
export type EncounterParticipant = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Persons involved in the encounter other than the patient. */
  individual?: Maybe<ResourceReference>
  /** Period of time during the encounter that the participant participated. */
  period?: Maybe<Period>
  /** http://hl7.org/fhir/stu3/valueset-encounter-participant-type.html */
  type?: Maybe<Array<Maybe<CodeableConcept>>>
}

/** The list of diagnosis relevant to this encounter. */
export type EncounterDiagnosis = {
  /** Reason the encounter takes place (resource). */
  condition?: Maybe<ResourceReference>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Ranking of the diagnosis (for each role type). */
  rank?: Maybe<Scalars['Int']>
  /** http://hl7.org/fhir/stu3/valueset-diagnosis-role.html */
  role?: Maybe<CodeableConcept>
}

/** AuthDetails about the admission to a healthcare service. */
export type EncounterHospitalisation = {
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-SourceOfAdmission-1 */
  admitSource?: Maybe<CodeableConcept>
  /** Location to which the patient is discharged. */
  destination?: Maybe<ResourceReference>
  /** http://hl7.org/fhir/stu3/valueset-encounter-diet.html */
  dietPreference?: Maybe<Array<Maybe<CodeableConcept>>>
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DischargeDestination-1 */
  dischargeDisposition?: Maybe<CodeableConcept>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The location from which the patient came before admission. */
  origin?: Maybe<ResourceReference>
  /** Pre-admission identifier. */
  preAdmissionIdentifier?: Maybe<Identifier>
  /** http://hl7.org/fhir/stu3/ValueSet/v2-0092 */
  reAdmission?: Maybe<CodeableConcept>
  /** http://hl7.org/fhir/stu3/valueset-encounter-special-arrangements.html */
  specialArrangement?: Maybe<Array<Maybe<CodeableConcept>>>
  /** http://hl7.org/fhir/stu3/valueset-encounter-special-courtesy.html */
  specialCourtesy?: Maybe<Array<Maybe<CodeableConcept>>>
}

/** List of locations where the patient has been. */
export type EncounterLocation = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Location the encounter takes place. */
  location: ResourceReference
  /** Time period during which the patient was present at the location. */
  period?: Maybe<Period>
  /** http://hl7.org/fhir/stu3/valueset-encounter-location-status.html */
  status?: Maybe<EncounterLocationStatusCode>
}

export enum EncounterLocationStatusCode {
  Planned = 'PLANNED',
  Active = 'ACTIVE',
  Reserved = 'RESERVED',
  Completed = 'COMPLETED',
}

/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export type CarePlan = {
  /** Action to occur as part of plan. */
  activity?: Maybe<CarePlanActivity>
  /** Health issues this plan addresses. */
  addresses?: Maybe<Array<Maybe<ResourceReference>>>
  /** Who is responsible for contents of the plan. */
  author?: Maybe<Array<Maybe<ResourceReference>>>
  /** Fulfills care plan. */
  basedOn?: Maybe<Array<Maybe<ResourceReference>>>
  /** Who's involved in plan? */
  careTeam?: Maybe<Array<Maybe<ResourceReference>>>
  /** http://hl7.org/fhir/stu3/valueset-care-plan-category.html */
  category?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Created in context of. */
  context?: Maybe<ResourceReference>
  /** Protocol or definition. */
  definition?: Maybe<Array<Maybe<ResourceReference>>>
  /** Summary of nature of plan. */
  description?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Desired outcome of plan. */
  goal?: Maybe<Array<Maybe<ResourceReference>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** http://hl7.org/fhir/stu3/valueset-care-plan-intent.html */
  intent: CarePlanIntentCode
  /** Metadata about the resource. */
  metadata: Metadata
  /** Comments about the plan. */
  note?: Maybe<Array<Maybe<Annotation>>>
  /** Part of referenced CarePlan. */
  partOf?: Maybe<Array<Maybe<ResourceReference>>>
  /** Time period plan covers. */
  period?: Maybe<Period>
  /** CarePlan replaced by this CarePlan. */
  replaces?: Maybe<Array<Maybe<ResourceReference>>>
  /** http://hl7.org/fhir/stu3/valueset-care-plan-status.html */
  status: CarePlanStatusCode
  /** Information considered as part of plan. */
  supportingInfo?: Maybe<Array<Maybe<ResourceReference>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Human-friendly name for the CarePlan. */
  title?: Maybe<Scalars['String']>
}

export enum CarePlanStatusCode {
  Draft = 'DRAFT',
  Active = 'ACTIVE',
  Suspended = 'SUSPENDED',
  Completed = 'COMPLETED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Cancelled = 'CANCELLED',
  Unknown = 'UNKNOWN',
}

export enum CarePlanIntentCode {
  Proposal = 'PROPOSAL',
  Plan = 'PLAN',
  Order = 'ORDER',
  Option = 'OPTION',
}

/** Action to occur as part of plan. */
export type CarePlanActivity = {
  /** In-line definition of activity. */
  detail?: Maybe<CarePlanActivityDetail>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** http://hl7.org/fhir/stu3/valueset-care-plan-activity-outcome.html */
  outcomeCodeableConcept?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Appointment, Encounter, Procedure, etc. */
  outcomeReference?: Maybe<Array<Maybe<ResourceReference>>>
  /** Comments about the activity status/progress. */
  progress?: Maybe<Array<Maybe<Annotation>>>
  /** Activity details defined in specific resource. */
  reference?: Maybe<ResourceReference>
}

/** In-line definition of activity. */
export type CarePlanActivityDetail = {
  /** http://hl7.org/fhir/stu3/valueset-care-plan-activity-category.html */
  category?: Maybe<CodeableConcept>
  /** http://hl7.org/fhir/stu3/valueset-care-plan-activity.html */
  code?: Maybe<CodeableConcept>
  /** How to consume/day? */
  dailyAmount?: Maybe<Quantity>
  /** Protocol or definition. */
  definition?: Maybe<ResourceReference>
  /** Extra info describing activity to perform. */
  description?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Goals this activity relates to. */
  goal?: Maybe<Array<Maybe<ResourceReference>>>
  /** Where it should happen. */
  location?: Maybe<ResourceReference>
  /** Who will be responsible? */
  performer?: Maybe<Array<Maybe<ResourceReference>>>
  /** What is to be administered/supplied. */
  product?: Maybe<CarePlanActivityDetailProduct>
  /** Do NOT do. */
  prohibited?: Maybe<Scalars['Boolean']>
  /** How much to administer/supply/consume. */
  quantity?: Maybe<Quantity>
  /** http://hl7.org/fhir/stu3/valueset-activity-reason.html */
  reasonCode?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Condition triggering need for activity. */
  reasonReference?: Maybe<Array<Maybe<ResourceReference>>>
  /** http://hl7.org/fhir/stu3/valueset-care-plan-activity-status.html */
  status: CarePlanActivityDetailStatusCode
  /** Reason for current status. */
  statusReason?: Maybe<Scalars['String']>
}

export enum CarePlanActivityDetailStatusCode {
  NotStarted = 'NOT_STARTED',
  Scheduled = 'SCHEDULED',
  InProgress = 'IN_PROGRESS',
  OnHold = 'ON_HOLD',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
  Unknown = 'UNKNOWN',
}

/** What is to be administered/supplied. */
export type CarePlanActivityDetailProduct = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** What is to be administered/supplied. */
  productCodeableConcept?: Maybe<CodeableConcept>
  /** What is to be administered/supplied. */
  productReference?: Maybe<ResourceReference>
}

/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export type EpisodeOfCare = {
  /** The set of accounts that may be used for billing for this EpisodeOfCare. */
  account?: Maybe<ResourceReference>
  /** Care manager/care co-ordinator for the patient. */
  careManager?: Maybe<ResourceReference>
  /** The list of diagnosis relevant to this episode of care. */
  diagnosis?: Maybe<Array<Maybe<EpisodeOfCareDiagnosis>>>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** Organization that assumes care. */
  managingOrganization?: Maybe<ResourceReference>
  /** Metadata about the resource. */
  metadata: Metadata
  /** Interval during responsibility is assumed. */
  period?: Maybe<Period>
  /** Originating Referral Request(s). */
  referralRequest?: Maybe<Array<Maybe<ResourceReference>>>
  /** http://hl7.org/fhir/stu3/valueset-episode-of-care-status.html */
  status: EpisodeOfCareStatusCode
  /** Past list of status codes (the current status may be included to cover the start date of the status). */
  statusHistory?: Maybe<Array<Maybe<EpisodeOfCareStatusHistory>>>
  /** Other practitioners facilitating this episode of care. */
  team?: Maybe<Array<Maybe<ResourceReference>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** http://hl7.org/fhir/stu3/valueset-episodeofcare-type.html */
  type?: Maybe<Array<Maybe<CodeableConcept>>>
}

export enum EpisodeOfCareStatusCode {
  Planned = 'PLANNED',
  WaitList = 'WAIT_LIST',
  Active = 'ACTIVE',
  OnHold = 'ON_HOLD',
  Finished = 'FINISHED',
  Cancelled = 'CANCELLED',
  EnteredInError = 'ENTERED_IN_ERROR',
}

/** Past list of status codes (the current status may be included to cover the start date of the status). */
export type EpisodeOfCareStatusHistory = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Duration the EpisodeOfCare was in the specified status. */
  period: Period
  /** http://hl7.org/fhir/stu3/valueset-episode-of-care-status.html */
  status: EncounterStatusCode
}

/** The list of diagnosis relevant to this episode of care. */
export type EpisodeOfCareDiagnosis = {
  /** Conditions/problems/diagnoses this episode of care is for. */
  condition: ResourceReference
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Ranking of the diagnosis (for each role type). */
  rank?: Maybe<Scalars['Int']>
  /** http://hl7.org/fhir/stu3/valueset-diagnosis-role.html */
  role?: Maybe<CodeableConcept>
}

/** Community Treatment Order – LYPFT Custom Resource. */
export type LypftCommunityTreatmentOrder = {
  /** ?Needs more information from LYPFT? */
  consentToTreat?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** The legal status of the treatment order. */
  legalStatus?: Maybe<CodeableConcept>
  /** Metadata about the resource. */
  metadata: Metadata
  /** The time period of the treatment order. */
  period: Period
  /** ?Needs more information from LYPFT? */
  restrictions?: Maybe<Scalars['String']>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
}

/** The DocumentReference resource is used to describe a document that is made available to a healthcare system. */
export type DocumentReference = {
  /** Who/what authenticated the document. */
  authenticator?: Maybe<ResourceReference>
  /** Who and/or what authored the document. */
  author?: Maybe<Array<Maybe<ResourceReference>>>
  /** http://hl7.org/fhir/stu3/valueset-c80-doc-classcodes.html */
  class?: Maybe<CodeableConcept>
  /** Document referenced. */
  content: Array<Maybe<DocumentReferenceContent>>
  /** Clinical context of document. */
  context?: Maybe<DocumentReferenceContext>
  /** Document creation time. */
  created?: Maybe<PartialDateTime>
  /** Organization which maintains the document. */
  custodian?: Maybe<ResourceReference>
  /** Human-readable description (title). */
  description?: Maybe<Scalars['String']>
  /** http://hl7.org/fhir/stu3/valueset-composition-status.html */
  docStatus?: Maybe<DocumentReferenceDocStatusCode>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** When this document reference was created. */
  indexed: PartialDateTime
  /** Master Version Specific Identifier. */
  masterIdentifier?: Maybe<Identifier>
  /** Metadata about the resource. */
  metadata: Metadata
  /** Relationships to other documents. */
  relatesTo?: Maybe<Array<Maybe<DocumentReferenceRelatesTo>>>
  /** Document security-tags. */
  securityLabel?: Maybe<Array<Maybe<ResourceReference>>>
  /** http://hl7.org/fhir/stu3/valueset-document-reference-status.html */
  status: DocumentReferenceStatusCode
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DocumentType-1 */
  type: CodeableConcept
}

export enum DocumentReferenceStatusCode {
  Current = 'CURRENT',
  Superseded = 'SUPERSEDED',
  EnteredInError = 'ENTERED_IN_ERROR',
}

export enum DocumentReferenceDocStatusCode {
  Preliminary = 'PRELIMINARY',
  Final = 'FINAL',
  Appended = 'APPENDED',
  Amended = 'AMENDED',
  EnteredInError = 'ENTERED_IN_ERROR',
}

/** Relationships to other documents. */
export type DocumentReferenceRelatesTo = {
  /** http://hl7.org/fhir/stu3/valueset-document-relationship-type.html */
  code: DocumentReferenceRelatesToCode
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Target of the relationship. */
  target: ResourceReference
}

export enum DocumentReferenceRelatesToCode {
  Replaces = 'REPLACES',
  Transforms = 'TRANSFORMS',
  Signs = 'SIGNS',
  Appends = 'APPENDS',
}

/** Document referenced. */
export type DocumentReferenceContent = {
  /** Where to access the document. */
  attachment: Attachment
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Format/content rules for the document. */
  format?: Maybe<Coding>
}

/** Clinical context of document. */
export type DocumentReferenceContext = {
  /** Context of the document content. */
  encounter?: Maybe<DocumentReference>
  /** Main clinical acts documented. */
  event?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Kind of facility where patient was seen. */
  facilityType?: Maybe<CodeableConcept>
  /** Time of service that is being documented. */
  period?: Maybe<Period>
  /** Additional details about where the content was created (e.g. clinical specialty). */
  practiceSetting?: Maybe<CodeableConcept>
  /** Related identifiers or resources. */
  related?: Maybe<Array<Maybe<DocumentReferenceRelated>>>
  /** Patient demographics from source. */
  sourcePatientInfo?: Maybe<DocumentReference>
}

/** Related identifiers or resources. */
export type DocumentReferenceRelated = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Identifier of related objects or events. */
  identifier?: Maybe<Identifier>
  /** Related Resource. */
  ref?: Maybe<ResourceReference>
}

/** Prospective warnings of potential issues when providing care to the patient. */
export type Flag = {
  /** Flag creator. */
  author?: Maybe<ResourceReference>
  /** http://hl7.org/fhir/stu3/valueset-flag-category.html */
  category?: Maybe<CodeableConcept>
  /** http://hl7.org/fhir/stu3/valueset-flag-code.html */
  code: CodeableConcept
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** Metadata about the resource. */
  metadata: Metadata
  /** Time period when flag is active. */
  period?: Maybe<Period>
  /** http://hl7.org/fhir/stu3/valueset-flag-status.html */
  status: FlagStatusCode
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
}

export enum FlagStatusCode {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  EnteredInError = 'ENTERED_IN_ERROR',
}

/** Queries the YHCR System-of-Systems. */
export type Yhcr = {
  allergyIntolerances?: Maybe<Array<Maybe<AllergyIntolerance>>>
  appointments?: Maybe<EncounterContinuation>
  condition?: Maybe<Condition>
  conditions?: Maybe<Array<Maybe<Condition>>>
  dataAvailability?: Maybe<DataAvailability>
  documents?: Maybe<DocumentReferenceContinuation>
  hospitalStays?: Maybe<Array<Maybe<Encounter>>>
  observations?: Maybe<Array<Maybe<Observation>>>
}

/** Queries the YHCR System-of-Systems. */
export type YhcrAllergyIntolerancesArgs = {
  nhsNumber: Scalars['String']
}

/** Queries the YHCR System-of-Systems. */
export type YhcrAppointmentsArgs = {
  nhsNumber: Scalars['String']
  status?: Maybe<Array<Maybe<EncounterStatusCode>>>
  cursorToken?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
}

/** Queries the YHCR System-of-Systems. */
export type YhcrConditionArgs = {
  nhsNumber: Scalars['String']
  id: Scalars['String']
}

/** Queries the YHCR System-of-Systems. */
export type YhcrConditionsArgs = {
  nhsNumber: Scalars['String']
}

/** Queries the YHCR System-of-Systems. */
export type YhcrDataAvailabilityArgs = {
  nhsNumber: Scalars['String']
}

/** Queries the YHCR System-of-Systems. */
export type YhcrDocumentsArgs = {
  nhsNumber: Scalars['String']
  fromDate: Scalars['Date']
  toDate: Scalars['Date']
  cursorToken?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
}

/** Queries the YHCR System-of-Systems. */
export type YhcrHospitalStaysArgs = {
  nhsNumber: Scalars['String']
}

/** Queries the YHCR System-of-Systems. */
export type YhcrObservationsArgs = {
  nhsNumber: Scalars['String']
}

/** A continuation of DocumentReference resources. */
export type DocumentReferenceContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The continuation of DocumentReference resources. */
  resources: Array<Maybe<DocumentReference>>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
}

/** https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Observation-1 */
export type Observation = {
  basedOn?: Maybe<ResourceReference>
  bodySite?: Maybe<Array<Maybe<CodeableConcept>>>
  category?: Maybe<Array<Maybe<CodeableConcept>>>
  code: CodeableConcept
  comment?: Maybe<Scalars['String']>
  component?: Maybe<Array<Maybe<ObservationComponent>>>
  context?: Maybe<ResourceReference>
  dataAbsentReason?: Maybe<CodeableConcept>
  device?: Maybe<ResourceReference>
  effective?: Maybe<ObservationEffective>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  identifier?: Maybe<Array<Maybe<Identifier>>>
  interpretation?: Maybe<CodeableConcept>
  issued?: Maybe<PartialDateTime>
  /** Metadata about the resource. */
  metadata: Metadata
  method?: Maybe<CodeableConcept>
  performer?: Maybe<Array<Maybe<ResourceReference>>>
  referenceRange?: Maybe<Array<Maybe<ObservationReferenceRange>>>
  related?: Maybe<Array<Maybe<ObservationReferenceRange>>>
  specimen?: Maybe<ResourceReference>
  status: ObservationStatusCode
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  value?: Maybe<ObservationValue>
}

/** Component results */
export type ObservationComponent = {
  code: CodeableConcept
  dataAbsentReason?: Maybe<CodeableConcept>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  interpretation?: Maybe<CodeableConcept>
  referenceRange?: Maybe<Array<Maybe<ObservationReferenceRange>>>
  value?: Maybe<ObservationValue>
}

/** Provides guide for interpretation */
export type ObservationReferenceRange = {
  age?: Maybe<Range>
  appliesTo?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  high?: Maybe<Quantity>
  low?: Maybe<Quantity>
  text?: Maybe<Scalars['String']>
  type?: Maybe<CodeableConcept>
}

/** Actual result */
export type ObservationValue = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  valueAttachment?: Maybe<Attachment>
  valueBoolean?: Maybe<Scalars['Boolean']>
  valueCodeableConcept?: Maybe<CodeableConcept>
  valueDateTime?: Maybe<PartialDateTime>
  valuePeriod?: Maybe<Period>
  valueQuantity?: Maybe<Quantity>
  valueRange?: Maybe<Range>
  valueRatio?: Maybe<Ratio>
  valueSampledData?: Maybe<SampledData>
  valueString?: Maybe<Scalars['String']>
}

/** Data that comes from a series of measurements taken by a device, which may have upper and lower limits. The data type also supports more than one dimension in the data. */
export type SampledData = {
  /** Decimal values with spaces, or "E" | "U" | "L" */
  data: Scalars['String']
  /** Number of sample points at each time point */
  dimensions: Scalars['Int']
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Multiply data by this before adding to origin */
  factor?: Maybe<Scalars['Decimal']>
  /** Lower limit of detection */
  lowerLimit?: Maybe<Scalars['Decimal']>
  /** Zero value and units */
  origin: Quantity
  /** Number of milliseconds between samples */
  period?: Maybe<Scalars['Decimal']>
  /** Upper limit of detection */
  upperLimit?: Maybe<Scalars['Decimal']>
}

/** Clinically relevant time/time-period for observation */
export type ObservationEffective = {
  effectiveDateTime?: Maybe<PartialDateTime>
  effectivePeriod?: Maybe<Period>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
}

/**  Codes providing the status of an observation */
export enum ObservationStatusCode {
  Registered = 'REGISTERED',
  Preliminary = 'PRELIMINARY',
  Final = 'FINAL',
  Amended = 'AMENDED',
  Corrected = 'CORRECTED',
  Cancelled = 'CANCELLED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Unknown = 'UNKNOWN',
}

/** The reason for accessing the patient record. */
export enum ReasonForAccessCode {
  /** Direct care (Emergency). Access is in the context of a patient. */
  DirectCareEmergency = 'DIRECT_CARE_EMERGENCY',
  /** Direct care (Non-emergency). Access is in the context of a patient. */
  DirectCareNonEmergency = 'DIRECT_CARE_NON_EMERGENCY',
  /** Indirect care with the consent of the patient. Access is in the context of the patient. */
  IndirectCareInContext = 'INDIRECT_CARE_IN_CONTEXT',
  /** Indirect care not in the context of a patient. (Not patient-centric). */
  IndirectCareNotInContext = 'INDIRECT_CARE_NOT_IN_CONTEXT',
  /** Analytics with access restricted to pseudonymised data. (Not patient-centric). */
  AnalyticsAccess = 'ANALYTICS_ACCESS',
  /** Administration (Not patient-centric). */
  Administration = 'ADMINISTRATION',
}

/** The data source profile to apply to the query context. */
export enum DataSourceProfile {
  /** The default profile. */
  Default = 'DEFAULT',
  /** Only include Leeds data for testing our own data provision. */
  LeedsTesting = 'LEEDS_TESTING',
}

/** The currently logged-in User Identity and Permissions. */
export type User = {
  /** The Data Providers the User has access to. */
  dataProviderPermissions?: Maybe<Array<Maybe<DataProviderPermission>>>
  /** The Resources and Operations the user has access to. */
  entityPermissions?: Maybe<Array<Maybe<EntityPermission>>>
  /** The users full name. */
  fullName: Scalars['String']
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** The available Launch types the user can make. */
  launchPermissions?: Maybe<Array<Maybe<LaunchPermission>>>
  /** Metadata about the resource. */
  metadata: Metadata
  /** The users organisation unique identifier. */
  organisationIdentifier: Scalars['String']
  /** The username. */
  userName: Scalars['String']
}

export enum DataProviderPermission {
  Ehr = 'EHR',
  Yhcr = 'YHCR',
  Lypft = 'LYPFT',
  GpConnect = 'GP_CONNECT',
}

/** Permission to perform one or more Operations on a given Entity. */
export type EntityPermission = {
  /** The Operation(s) the User can perform on the Entity. */
  actions: Array<EntityAction>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The Resource the user has access to. */
  resource?: Maybe<Scalars['String']>
  /** The Entity the user has access to. */
  type: EntityType
}

export enum EntityAction {
  Create = 'CREATE',
  Read = 'READ',
  Update = 'UPDATE',
  Delete = 'DELETE',
}

export enum EntityType {
  Address = 'ADDRESS',
  Admission = 'ADMISSION',
  Annotation = 'ANNOTATION',
  ApprovalToView = 'APPROVAL_TO_VIEW',
  Attachments = 'ATTACHMENTS',
  BloodTest = 'BLOOD_TEST',
  BreakGlass = 'BREAK_GLASS',
  CareEpisode = 'CARE_EPISODE',
  Chemotherapy = 'CHEMOTHERAPY',
  ChildrenSocialCare = 'CHILDREN_SOCIAL_CARE',
  Clinic = 'CLINIC',
  ClinicalAlerts = 'CLINICAL_ALERTS',
  ClinicalTrial = 'CLINICAL_TRIAL',
  ClinicalTrialDocument = 'CLINICAL_TRIAL_DOCUMENT',
  Contact = 'CONTACT',
  Consultation = 'CONSULTATION',
  Diagnosis = 'DIAGNOSIS',
  EndOfLifeCare = 'END_OF_LIFE_CARE',
  Epro = 'EPRO',
  FileLink = 'FILE_LINK',
  Hmds = 'HMDS',
  Hospice = 'HOSPICE',
  InfectionControl = 'INFECTION_CONTROL',
  Investigation = 'INVESTIGATION',
  LabResult = 'LAB_RESULT',
  Mdt = 'MDT',
  Monitoring = 'MONITORING',
  Organisation = 'ORGANISATION',
  OutPatient = 'OUT_PATIENT',
  Pathology = 'PATHOLOGY',
  Patient = 'PATIENT',
  PatientProduct = 'PATIENT_PRODUCT',
  PatientTasks = 'PATIENT_TASKS',
  Radiotherapy = 'RADIOTHERAPY',
  RadiotherapyBooking = 'RADIOTHERAPY_BOOKING',
  Referral = 'REFERRAL',
  Review = 'REVIEW',
  SelfClaim = 'SELF_CLAIM',
  Spine = 'SPINE',
  Surgery = 'SURGERY',
  Team = 'TEAM',
  Theatre = 'THEATRE',
  User = 'USER',
  WaitingTime = 'WAITING_TIME',
  Ward = 'WARD',
  VirtualWard = 'VIRTUAL_WARD',
  WardConfig = 'WARD_CONFIG',
  WardStay = 'WARD_STAY',
  WardAttender = 'WARD_ATTENDER',
  WatchListManagement = 'WATCH_LIST_MANAGEMENT',
  TrustWideWatchListManagement = 'TRUST_WIDE_WATCH_LIST_MANAGEMENT',
  QToolQuestionnaireResponse = 'Q_TOOL_QUESTIONNAIRE_RESPONSE',
  XForms = 'X_FORMS',
  MpvLengthOfStay = 'MPV_LENGTH_OF_STAY',
  MpvSummary = 'MPV_SUMMARY',
  MpvNationalEarlyWarning = 'MPV_NATIONAL_EARLY_WARNING',
  MpvDischargePlanning = 'MPV_DISCHARGE_PLANNING',
  MpvDementia = 'MPV_DEMENTIA',
  MpvVenousThromboembolism = 'MPV_VENOUS_THROMBOEMBOLISM',
  MpvHealthcareAssociatedInfection = 'MPV_HEALTHCARE_ASSOCIATED_INFECTION',
  MpvFall = 'MPV_FALL',
  MpvNutrition = 'MPV_NUTRITION',
  MpvRedTray = 'MPV_RED_TRAY',
  MpvPalliativeCareTeam = 'MPV_PALLIATIVE_CARE_TEAM',
  MpvOccupationalTherapy = 'MPV_OCCUPATIONAL_THERAPY',
  MpvPhysiotherapy = 'MPV_PHYSIOTHERAPY',
  MpvMedicalSocialWork = 'MPV_MEDICAL_SOCIAL_WORK',
  MpvClinicalReview = 'MPV_CLINICAL_REVIEW',
  MpvAdmissionReview = 'MPV_ADMISSION_REVIEW',
  MpvTransferPlanning = 'MPV_TRANSFER_PLANNING',
  MpvAntibiotic = 'MPV_ANTIBIOTIC',
  MpvBed = 'MPV_BED',
  MpvPressureUlcer = 'MPV_PRESSURE_ULCER',
  MpvJobs = 'MPV_JOBS',
  MpvSchool = 'MPV_SCHOOL',
  MpvPaediatricNutrition = 'MPV_PAEDIATRIC_NUTRITION',
  MpvDietitian = 'MPV_DIETITIAN',
  MpvObservation = 'MPV_OBSERVATION',
  MpvObservationSettings = 'MPV_OBSERVATION_SETTINGS',
  MpvInternalReferral = 'MPV_INTERNAL_REFERRAL',
  MpvMedicinesReconciliation = 'MPV_MEDICINES_RECONCILIATION',
  MpvSpecialityAndType = 'MPV_SPECIALITY_AND_TYPE',
  MpvDiabetes = 'MPV_DIABETES',
  MpvePrescribe = 'MPVE_PRESCRIBE',
  MpvAvailableBeds = 'MPV_AVAILABLE_BEDS',
  MpvShiftHandover = 'MPV_SHIFT_HANDOVER',
  MpvShiftHandoverComment = 'MPV_SHIFT_HANDOVER_COMMENT',
  MpvNamedNurse = 'MPV_NAMED_NURSE',
  MpvCriteriaLedDischarge = 'MPV_CRITERIA_LED_DISCHARGE',
  Edan = 'EDAN',
  EdanAdmin = 'EDAN_ADMIN',
  Emeds = 'EMEDS',
  WinDipReferalDocuments = 'WIN_DIP_REFERAL_DOCUMENTS',
  WinDipCaseNotes = 'WIN_DIP_CASE_NOTES',
  NewsInterventionsUnrestricted = 'NEWS_INTERVENTIONS_UNRESTRICTED',
  LstOutpatientClinics = 'LST_OUTPATIENT_CLINICS',
  LstOperatingTheatres = 'LST_OPERATING_THEATRES',
  LstMultidisciplinaryTeams = 'LST_MULTIDISCIPLINARY_TEAMS',
  LstMyCustomViews = 'LST_MY_CUSTOM_VIEWS',
  LstSharedViews = 'LST_SHARED_VIEWS',
  LstInpatientWards = 'LST_INPATIENT_WARDS',
  LstVirtualLists = 'LST_VIRTUAL_LISTS',
  LstReferrals = 'LST_REFERRALS',
  AssessmentHistory = 'ASSESSMENT_HISTORY',
  Helm = 'HELM',
  CustomListPatient = 'CUSTOM_LIST_PATIENT',
  CustomListAdmittedPatient = 'CUSTOM_LIST_ADMITTED_PATIENT',
  CustomListDischargedPatient = 'CUSTOM_LIST_DISCHARGED_PATIENT',
  CustomListCommunityPharmacy = 'CUSTOM_LIST_COMMUNITY_PHARMACY',
  CustomListPreAssessment = 'CUSTOM_LIST_PRE_ASSESSMENT',
  CustomListSdec = 'CUSTOM_LIST_SDEC',
  CustomListSuspiciousFindings = 'CUSTOM_LIST_SUSPICIOUS_FINDINGS',
  CustomListInfectionPreventionControl = 'CUSTOM_LIST_INFECTION_PREVENTION_CONTROL',
  CustomListOutpatientPharmacy = 'CUSTOM_LIST_OUTPATIENT_PHARMACY',
  CustomListEdan = 'CUSTOM_LIST_EDAN',
  AllergyIntolerance = 'ALLERGY_INTOLERANCE',
  Appointment = 'APPOINTMENT',
  AuditEvent = 'AUDIT_EVENT',
  CarePlan = 'CARE_PLAN',
  CareTeam = 'CARE_TEAM',
  CdsTemplate = 'CDS_TEMPLATE',
  CommunityTreatmentOrder = 'COMMUNITY_TREATMENT_ORDER',
  Document = 'DOCUMENT',
  Encounter = 'ENCOUNTER',
  Guidance = 'GUIDANCE',
  Medication = 'MEDICATION',
  Observation = 'OBSERVATION',
  OnlineForms = 'ONLINE_FORMS',
}

/** Permission to launch one or more Apps with the given Intents. */
export type LaunchPermission = {
  /** The App the user can launch. */
  application: LaunchApp
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The Intent(s) the user can launch the App with. */
  intents: Array<Scalars['String']>
  /** The Resource the user wishes to launch. */
  resource: Scalars['String']
}

export enum LaunchApp {
  FormsForHealth = 'FORMS_FOR_HEALTH',
}

/** An instance of a feature that is controlled via a toggle. */
export type FeatureToggle = {
  /** The message to show (if status is message). */
  disabledMessage?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The feature instance the toggle controls. */
  featureFlag: FeatureInstance
  /** The status of the feature toggle. */
  isEnabled: Scalars['Boolean']
}

export enum FeatureInstance {
  FormsForHealthLaunch = 'FORMS_FOR_HEALTH_LAUNCH',
  GpConnectDataProvider = 'GP_CONNECT_DATA_PROVIDER',
  ResourceAuthorization = 'RESOURCE_AUTHORIZATION',
  YhcrDataProvider = 'YHCR_DATA_PROVIDER',
}
