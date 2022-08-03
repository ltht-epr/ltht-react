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
  Guid: any
}

export type Query = {
  ehr?: Maybe<Ehr>
  gpConnect?: Maybe<GpConnect>
  lypft?: Maybe<Lypft>
  yhcr?: Maybe<Yhcr>
  user?: Maybe<User>
  features?: Maybe<Array<Maybe<FeatureToggle>>>
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
  carePlanDefinition?: Maybe<PlanDefinition>
  carePlanDefinitions?: Maybe<PlanDefinitionContinuationType>
  carePlanDefinitionUseContext?: Maybe<Array<Maybe<UsageContext>>>
  condition?: Maybe<Condition>
  conditions?: Maybe<ConditionContinuation>
  guidance?: Maybe<Array<Maybe<Guidance>>>
  medication?: Maybe<MedicationRequest>
  medications?: Maybe<MedicationRequestContinuationType>
  patient?: Maybe<Patient>
  questionnaire?: Maybe<QuestionnaireResponse>
  questionnaireLastCompleted?: Maybe<QuestionnaireResponse>
  summaryDefinition?: Maybe<Questionnaire>
  summaryRecords?: Maybe<QuestionnaireResponseContinuation>
  tasks?: Maybe<TaskContinuation>
  terminologyItems?: Maybe<TerminologyItemContinuation>
}

/** Queries the LTHT EHR. */
export type EhrAllergyIntoleranceArgs = {
  patientGuid: Scalars['String']
  id: Scalars['String']
}

/** Queries the LTHT EHR. */
export type EhrAllergyIntolerancesArgs = {
  patientGuid: Scalars['String']
  cursorToken?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
  clinicalStatus?: Maybe<Array<Maybe<AllergyIntoleranceClinicalStatusCode>>>
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
export type EhrCarePlanDefinitionArgs = {
  id: Scalars['String']
}

/** Queries the LTHT EHR. */
export type EhrCarePlanDefinitionsArgs = {
  pathwayType: Scalars['String']
  filter?: Maybe<Scalars['String']>
  usageContext?: Maybe<Scalars['String']>
  cursorToken?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
}

/** Queries the LTHT EHR. */
export type EhrCarePlanDefinitionUseContextArgs = {
  pathwayType: Scalars['String']
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
export type EhrMedicationArgs = {
  patientGuid: Scalars['String']
  id: Scalars['String']
}

/** Queries the LTHT EHR. */
export type EhrMedicationsArgs = {
  patientGuid: Scalars['String']
  listType: Scalars['String']
  fhirVersion: Scalars['String']
  listScope?: Maybe<Scalars['String']>
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
export type EhrSummaryDefinitionArgs = {
  name: Scalars['String']
}

/** Queries the LTHT EHR. */
export type EhrSummaryRecordsArgs = {
  patientGuid: Scalars['String']
  name: Scalars['String']
  cursorToken?: Maybe<Scalars['String']>
  count?: Maybe<Scalars['Int']>
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

/** Queries the LTHT EHR. */
export type EhrTerminologyItemsArgs = {
  cursorToken?: Maybe<Scalars['String']>
  codeSystem: Scalars['String']
  codeSystemVersion: Scalars['Int']
  filter: Scalars['String']
  count?: Maybe<Scalars['Int']>
}

/** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
export type AllergyIntolerance = {
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** http://hl7.org/fhir/stu3/valueset-allergy-clinical-status.html */
  clinicalStatus?: Maybe<AllergyIntoleranceClinicalStatusCode>
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AllergyVerificationStatus-1 */
  verificationStatus: AllergyIntoleranceVerificationStatusCode
  /** http://hl7.org/fhir/stu3/valueset-allergy-intolerance-type.html */
  type?: Maybe<AllergyIntoleranceTypeCode>
  /** http://hl7.org/fhir/stu3/valueset-allergy-intolerance-category.html */
  category?: Maybe<Array<Maybe<AllergyIntoleranceCategoryCode>>>
  /** http://hl7.org/fhir/stu3/valueset-allergy-intolerance-criticality.html */
  criticality?: Maybe<AllergyIntoleranceCriticalityCode>
  /** http://hl7.org/fhir/stu3/valueset-allergyintolerance-code.html */
  code?: Maybe<CodeableConcept>
  /** When allergy or intolerance was identified. */
  onSet?: Maybe<AllergyIntoleranceOnSet>
  /** Date record was believed accurate. */
  assertedDate?: Maybe<PartialDateTime>
  /** Who recorded the sensitivity. */
  recorder?: Maybe<ResourceReference>
  /** Source of the information about the allergy. */
  asserter?: Maybe<ResourceReference>
  /** Date(/time) of last known occurrence of a reaction. */
  lastOccurrence?: Maybe<PartialDateTime>
  /** Additional text not captured in other fields. */
  note?: Maybe<Array<Maybe<Annotation>>>
  /** Adverse Reaction Events linked to exposure to substance. */
  reaction?: Maybe<Array<Maybe<AllergyIntoleranceReaction>>>
}

/** Metadata about the resource. */
export type Metadata = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The version specific identifier. This value changes when the resource is created, updated, or deleted. */
  versionId?: Maybe<Scalars['String']>
  /** When the resource was requested. */
  requestedWhen: Scalars['DateTimeOffset']
  /** When the resource last changed - e.g. when the version changed. */
  lastUpdated?: Maybe<Scalars['DateTimeOffset']>
  /** The sources of the resource. */
  dataSources: Array<Maybe<Coding>>
  /** Security tags for this resource instance. */
  security?: Maybe<Array<Maybe<Coding>>>
  /** Has data been redacted for this resource instance? */
  isRedacted: Scalars['Boolean']
  /** To identify and relate resources to process and workflow. */
  tag?: Maybe<Array<Maybe<Coding>>>
}

/** Additional content defined by implementations. */
export type Extension = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Identifies the meaning of the extension. */
  url: Scalars['String']
  /** Value of extension (String). */
  valueString?: Maybe<Scalars['String']>
  /** Value of extension (CodeableConcept). */
  valueCodeableConcept?: Maybe<CodeableConcept>
  /** Value of extension (Attachment). */
  valueAttachment?: Maybe<Attachment>
  /** Value of extension (Boolean). */
  valueBoolean?: Maybe<Scalars['Boolean']>
}

/** A reference to one or more terminologies or ontologies but may also be defined by the provision of text. */
export type CodeableConcept = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Code defined by a terminology system. */
  coding?: Maybe<Array<Maybe<Coding>>>
  /** Symbol in syntax defined by the system. */
  text?: Maybe<Scalars['String']>
}

/** A defined concept using a symbol from a code system. */
export type Coding = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Symbol in syntax defined by the system. */
  code?: Maybe<Scalars['String']>
  /** Representation defined by the system. */
  display?: Maybe<Scalars['String']>
  /** Identity of the terminology system. */
  system?: Maybe<Scalars['String']>
  /** Version of the system - if relevant. */
  version?: Maybe<Scalars['String']>
}

/** Content in a format defined elsewhere. */
export type Attachment = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Mime type of the content, with charset etc. */
  contentType?: Maybe<Scalars['String']>
  /** Human language of the content (BCP-47). */
  language?: Maybe<Scalars['String']>
  /** Uri where the data can be found. */
  url?: Maybe<Scalars['String']>
  /** Number of bytes of content (if url provided). */
  size?: Maybe<Scalars['Int']>
  /** Hash of the data (sha-1, base64ed). */
  hash?: Maybe<Scalars['String']>
  /** Label to display in place of the data. */
  title?: Maybe<Scalars['String']>
  /** Date attachment was first created. */
  creation?: Maybe<PartialDateTime>
  /** The attachment data. */
  data?: Maybe<Scalars['String']>
}

/** A Date + Time, Year, Year + Month, or just a Time. */
export type PartialDateTime = {
  /** Represents a point in time, typically expressed as a date and time of day, relative to Coordinated Universal Time (UTC). */
  value?: Maybe<Scalars['DateTimeOffset']>
  /** Describes what the value represents – a full full or partial DateTime. */
  kind?: Maybe<PartialDateTimeKindCode>
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** http://hl7.org/fhir/narrative-status */
  status?: Maybe<NarrativeStatusCode>
  /** Limited xhtml content. */
  div: Scalars['String']
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The namespace for the identifier value. */
  system?: Maybe<Scalars['String']>
  /** The value that is unique. */
  value: Scalars['String']
  /** http://hl7.org/fhir/stu3/valueset-identifier-use.html */
  use?: Maybe<IdentifierUseCode>
  /** http://hl7.org/fhir/stu3/valueset-identifier-type.html */
  type?: Maybe<CodeableConcept>
  /** Time period when id is/was valid for use. */
  period?: Maybe<Period>
  /** Organization that issued id (may be just text). */
  assigner?: Maybe<ResourceReference>
}

export enum IdentifierUseCode {
  Usual = 'USUAL',
  Official = 'OFFICIAL',
  Temp = 'TEMP',
  Secondary = 'SECONDARY',
}

/** A time period defined by a start and end date/time. */
export type Period = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Starting time with inclusive boundary. */
  start?: Maybe<PartialDateTime>
  /** End time with inclusive boundary, if not ongoing. */
  end?: Maybe<PartialDateTime>
}

/** General references between resources. */
export type ResourceReference = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text alternative for the resource. */
  display: Scalars['String']
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  onSetAge?: Maybe<Quantity>
  onSetPeriod?: Maybe<Period>
  onSetRange?: Maybe<Range>
  onSetString?: Maybe<Scalars['String']>
  onSetDateTime?: Maybe<PartialDateTime>
}

/** A measured amount (or an amount that can potentially be measured). */
export type Quantity = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Numerical value (with implicit precision). */
  value?: Maybe<Scalars['Decimal']>
  /** < | <= | >= | > - how to understand the value. */
  comparator?: Maybe<QuantityComparatorCode>
  /** Unit representation. */
  unit?: Maybe<Scalars['String']>
  /** System that defines coded unit form. */
  system?: Maybe<Scalars['String']>
  /** Coded form of the unit. */
  code?: Maybe<Scalars['String']>
}

export enum QuantityComparatorCode {
  LessThan = 'LESS_THAN',
  LessOrEqualTo = 'LESS_OR_EQUAL_TO',
  GreaterOrEqualTo = 'GREATER_OR_EQUAL_TO',
  GreaterThan = 'GREATER_THAN',
}

/** A set of ordered Quantity values defined by a low and high limit. */
export type Range = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Low limit. */
  high?: Maybe<Quantity>
  /** High limit. */
  low?: Maybe<Quantity>
}

/** A text note which also contains information about who made the statement and when. */
export type Annotation = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Individual responsible for the annotation. */
  author?: Maybe<ResourceReference>
  /** When the annotation was made. */
  time?: Maybe<PartialDateTime>
  /** The annotation - text content. */
  text: Scalars['String']
}

/** Adverse Reaction Events linked to exposure to substance. */
export type AllergyIntoleranceReaction = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** http://hl7.org/fhir/stu3/valueset-substance-code.html */
  substance?: Maybe<CodeableConcept>
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AllergyManifestation-1 */
  manifestation: Array<Maybe<CodeableConcept>>
  /** Description of the event as a whole. */
  description?: Maybe<Scalars['String']>
  /** Date(/time) when manifestations showed. */
  onSet?: Maybe<PartialDateTime>
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-ReactionEventSeverity-1 */
  severity?: Maybe<AllergyIntoleranceReactionSeverityCode>
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AllergyExposureRoute-1 */
  exposureRoute?: Maybe<CodeableConcept>
  /** Additional text not captured in other fields. */
  note?: Maybe<Array<Maybe<Annotation>>>
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
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
  /** The continuation of Allergy Intolerance resources. */
  resources: Array<Maybe<AllergyIntolerance>>
}

/** A continuation of Task resources. */
export type AuditEventContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
  /** The continuation of Audit Event resources. */
  resources: Array<Maybe<AuditEvent>>
}

/** https://www.hl7.org/fhir/R4/auditevent.html */
export type AuditEvent = {
  /** Type of action performed during the event. */
  action?: Maybe<AuditEventAction>
  /** Type of action performed during the event. */
  agent: Array<Maybe<AuditEventAgent>>
  /** Data or objects used. */
  entity?: Maybe<Array<Maybe<AuditEventEntity>>>
  /** Whether the event succeeded or failed. */
  outcome?: Maybe<AuditEventOutcome>
  /** When the activity occurred. */
  period?: Maybe<Period>
  /** Time when the event was recorded. */
  recorded: PartialDateTime
  /** Audit Event Reporter. */
  source: AuditEventSource
  /** Type/identifier of event. */
  type: Coding
  /** Description of the event outcome. */
  outcomeDesc?: Maybe<Scalars['String']>
  /** More specific type/id for the event. */
  subType?: Maybe<Array<Maybe<Coding>>>
  /** The purposeOfUse of the event. */
  purposeOfEvent?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
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
  /** Type of entity involved. */
  type?: Maybe<Coding>
  /** Specific instance of resource. */
  what?: Maybe<ResourceReference>
  /** Security labels on the entity. */
  securityLabel?: Maybe<Array<Maybe<Coding>>>
}

/** Additional Information about the entity. */
export type AuditEventEntityDetail = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The identity of source detecting the event. */
  observer: ResourceReference
  /** Logical source location within the enterprise. */
  site?: Maybe<Scalars['String']>
  /** The type of source where event originated. */
  type?: Maybe<Array<Maybe<Coding>>>
}

/** https://www.hl7.org/fhir/R4/plandefinition.html */
export type PlanDefinition = {
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
  /** Canonical identifier for this plan definition, represented as a URI (globally unique) */
  url?: Maybe<Scalars['String']>
  /** Additional identifier for the plan definition. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** Business version of the plan definition. */
  version?: Maybe<Scalars['String']>
  /** Name for this plan definition (computer friendly). */
  name?: Maybe<Scalars['String']>
  /** Name for this plan definition (human friendly). */
  title?: Maybe<Scalars['String']>
  /** Subordinate title of the plan definition. */
  subTitle?: Maybe<Scalars['String']>
  /** order-set | clinical-protocol | eca-rule | workflow-definition */
  type?: Maybe<CodeableConcept>
  /** draft | active | retired | unknown */
  status: PlanDefinitionStatus
  /** For testing purposes, not real usage. */
  experimental?: Maybe<Scalars['Boolean']>
  /** Date last changed. */
  date?: Maybe<PartialDateTime>
  /** Name of the publisher (organization or individual). */
  publisher?: Maybe<Scalars['String']>
  /** Name of the publisher (organization or individual). */
  contact?: Maybe<Array<Maybe<ContactDetail>>>
  /** Natural language description of the plan definition. */
  description?: Maybe<Scalars['String']>
  /** Describes the clinical usage of the plan. */
  usageContext?: Maybe<Array<Maybe<UsageContext>>>
  /** Intended jurisdiction for plan definition (if applicable). */
  jurisdiction?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Why this plan definition is defined. */
  purpose?: Maybe<Scalars['String']>
  /** Describes the clinical usage of the plan. */
  usage?: Maybe<Scalars['String']>
  /** Use and/or publishing restrictions. */
  copyright?: Maybe<Scalars['String']>
  /** When the plan definition was approved by publisher. */
  approvalDate?: Maybe<PartialDateTime>
  /** When the plan definition was last reviewed. */
  lastReviewDate?: Maybe<PartialDateTime>
  /** When the plan definition is expected to be used. */
  effectivePeriod?: Maybe<Period>
  /** Keywords defined by the Care Plan Definition. */
  topic?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Who authored the content. */
  author?: Maybe<Array<Maybe<ContactDetail>>>
  /** Who edited the content. */
  editor?: Maybe<Array<Maybe<ContactDetail>>>
  /** Who reviewed the content. */
  reviewer?: Maybe<Array<Maybe<ContactDetail>>>
  /** Who endorsed the content. */
  endorser?: Maybe<Array<Maybe<ContactDetail>>>
  /** Additional documentation, citations. */
  relatedArtifact?: Maybe<Array<Maybe<RelatedArtifact>>>
  /** Logic used by the plan definition. */
  library?: Maybe<Array<Maybe<Scalars['String']>>>
  /** What the plan is trying to accomplish. */
  goal?: Maybe<Array<Maybe<PlanDefinitionGoal>>>
  /** Action defined by the plan. */
  action?: Maybe<Array<Maybe<PlanDefinitionAction>>>
}

export enum PlanDefinitionStatus {
  Draft = 'DRAFT',
  Active = 'ACTIVE',
  Retired = 'RETIRED',
  Unknown = 'UNKNOWN',
}

/** The ContactDetail structure defines general contact details. */
export type ContactDetail = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Name of an individual to contact. */
  name?: Maybe<Scalars['String']>
  /** Contact details for individual or organization. */
  telecom?: Maybe<Array<Maybe<ContactPoint>>>
}

/** Details for all kinds of technology-mediated contact points for a person or organization, including telephone, email, etc. */
export type ContactPoint = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** http://hl7.org/fhir/stu3/valueset-contact-point-system.html */
  system?: Maybe<ContactPointSystemCode>
  /** The actual contact point details. */
  value?: Maybe<Scalars['String']>
  /** http://hl7.org/fhir/stu3/valueset-contact-point-use.html */
  use?: Maybe<ContactPointUseCode>
  /** Specify preferred order of use (1 = highest). */
  rank?: Maybe<Scalars['Int']>
  /** Time period when name was/is in use. */
  period?: Maybe<Period>
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

export type UsageContext = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  code?: Maybe<Coding>
  valueCodeableConcept?: Maybe<CodeableConcept>
  valueQuantity?: Maybe<Quantity>
  valueRange?: Maybe<Range>
  valueReference?: Maybe<ResourceReference>
}

/** Related artifacts for a knowledge resource. */
export type RelatedArtifact = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** RelatedArtifactType code. */
  type: RelatedArtifactType
  /** Short label. */
  label?: Maybe<Scalars['String']>
  /** Brief description of the related artifact. */
  display?: Maybe<Scalars['String']>
  /** Bibliographic citation for the artifact. */
  citation?: Maybe<Scalars['String']>
  /** Where the artifact can be accessed. */
  url?: Maybe<Scalars['String']>
  /** What document is being referenced. */
  document?: Maybe<Attachment>
  /** What resource is being referenced. */
  resource?: Maybe<ResourceReference>
}

export enum RelatedArtifactType {
  Documentation = 'DOCUMENTATION',
  Justification = 'JUSTIFICATION',
  Citation = 'CITATION',
  Predecessor = 'PREDECESSOR',
  Successor = 'SUCCESSOR',
  DerivedFrom = 'DERIVED_FROM',
  DependsOn = 'DEPENDS_ON',
  ComposedOf = 'COMPOSED_OF',
}

/** https://www.hl7.org/fhir/plandefinition-definitions.html#PlanDefinition.goal */
export type PlanDefinitionGoal = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Goal category. */
  category?: Maybe<CodeableConcept>
  /** Code or text describing the goal. */
  description: CodeableConcept
  /** Goal priority. */
  priority?: Maybe<CodeableConcept>
  /** When goal pursuit begins. */
  start?: Maybe<CodeableConcept>
  /** What does the goal address. */
  addresses?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Supporting documentation for the goal. */
  documentation?: Maybe<Array<Maybe<RelatedArtifact>>>
  /** Target outcome for the goal. */
  target?: Maybe<Array<Maybe<PlanDefinitionGoalTarget>>>
}

/** https://www.hl7.org/fhir/plandefinition-definitions.html#PlanDefinition.goal.target */
export type PlanDefinitionGoalTarget = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The parameter whose value is to be tracked. */
  measure?: Maybe<CodeableConcept>
  /** The target value to be achieved. */
  detailQuantity?: Maybe<Quantity>
  /** The target value to be achieved. */
  detailRange?: Maybe<Range>
  /** The target value to be achieved. */
  detailCodeableConcept?: Maybe<CodeableConcept>
  /** Reach goal within. */
  due?: Maybe<Scalars['String']>
}

/** https://www.hl7.org/fhir/R4/plandefinition-definitions.html#PlanDefinition.action */
export type PlanDefinitionAction = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** User-visible prefix for the action (e.g. 1. or A.). */
  prefix?: Maybe<Scalars['String']>
  /** User-visible title. */
  title?: Maybe<Scalars['String']>
  /** Brief description of the action. */
  description?: Maybe<Scalars['String']>
  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system. */
  textEquivalent?: Maybe<Scalars['String']>
  /** Action priority. */
  priority?: Maybe<PlanDefinitionActionPriority>
  /** Code representing the meaning of the action or sub-actions. */
  code?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Why the action should be performed. */
  reason?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Supporting documentation for the intended performer of the action. */
  documentation?: Maybe<Array<Maybe<RelatedArtifact>>>
  /** A sub-action. */
  action?: Maybe<Array<Maybe<PlanDefinitionAction>>>
  /** ID of the Goal this action links to */
  goalId?: Maybe<Array<Maybe<Scalars['String']>>>
}

export enum PlanDefinitionActionPriority {
  Routine = 'ROUTINE',
  Urgent = 'URGENT',
  Asap = 'ASAP',
  Stat = 'STAT',
}

/** A continuation of Plan Definition resources. */
export type PlanDefinitionContinuationType = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
  /** The continuation of Plan Definition resources. */
  resources: Array<Maybe<PlanDefinition>>
}

export type Condition = {
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
  abatement?: Maybe<ConditionAbatement>
  assertedDate?: Maybe<PartialDateTime>
  asserter?: Maybe<ConditionAsserter>
  bodySite?: Maybe<Array<Maybe<CodeableConcept>>>
  category?: Maybe<Array<Maybe<CodeableConcept>>>
  clinicalStatus?: Maybe<ConditionClinicalStatus>
  code?: Maybe<CodeableConcept>
  context?: Maybe<ResourceReference>
  note?: Maybe<Array<Maybe<Annotation>>>
  evidence?: Maybe<Array<Maybe<ConditionEvidence>>>
  extensionData?: Maybe<Array<Maybe<QuestionnaireResponse>>>
  identifier?: Maybe<Array<Maybe<Identifier>>>
  onset?: Maybe<ConditionOnset>
  severity?: Maybe<CodeableConcept>
  stage?: Maybe<ConditionStage>
  verificationStatus?: Maybe<ConditionVerificationStatus>
}

export type ConditionAbatement = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  age?: Maybe<Quantity>
  period: Period
  dateTime: PartialDateTime
}

export type ConditionAsserter = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text alternative for the resource. */
  display: Scalars['String']
  /** Business identifier for the referenced resource. */
  identifier?: Maybe<Identifier>
  /** Literal reference, Relative, internal or absolute URL. */
  reference?: Maybe<Scalars['String']>
  /** Type the reference refers to (e.g. Patient. */
  typeName: Scalars['String']
  asserterName?: Maybe<Scalars['String']>
  asserterType?: Maybe<Scalars['String']>
}

export enum ConditionClinicalStatus {
  Active = 'ACTIVE',
  Recurrence = 'RECURRENCE',
  Inactive = 'INACTIVE',
  Remission = 'REMISSION',
  Resolved = 'RESOLVED',
}

export type ConditionEvidence = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  code?: Maybe<Array<Maybe<CodeableConcept>>>
  detail?: Maybe<Array<Maybe<ResourceReference>>>
}

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export type QuestionnaireResponse = {
  /** Person who received and recorded the answers. */
  author?: Maybe<ResourceReference>
  /** Date the answers were gathered. */
  authored?: Maybe<PartialDateTime>
  /** Encounter created as part of. */
  encounter?: Maybe<ResourceReference>
  /** Unique id for this set of answers. */
  identifier?: Maybe<Identifier>
  /** Groups and questions. */
  item?: Maybe<Array<Maybe<QuestionnaireResponseItem>>>
  /** Form being answered. */
  questionnaire?: Maybe<Questionnaire>
  /** The person who answered the questions. */
  source?: Maybe<ResourceReference>
  /** Why this questionnaire is defined. */
  status: QuestionnaireResponseStatus
  /** Request fulfilled by this QuestionnaireResponse. */
  basedOn?: Maybe<ResourceReference>
  /** Part of this action. */
  partOf?: Maybe<ResourceReference>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
}

/** Groups and questions. */
export type QuestionnaireResponseItem = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The response(s) to the question. */
  answer?: Maybe<Array<Maybe<QuestionnaireResponseItemAnswer>>>
  /** ElementDefinition - details for the item. */
  definition?: Maybe<Scalars['String']>
  /** Nested questionnaire response items. */
  item?: Maybe<Array<Maybe<QuestionnaireResponseItem>>>
  /** Name for group or question text. */
  text?: Maybe<Scalars['String']>
  /** Pointer to specific item from Questionnaire. */
  linkId?: Maybe<Scalars['String']>
}

/** The response(s) to the question. */
export type QuestionnaireResponseItemAnswer = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Nested groups and questions. */
  item?: Maybe<Array<Maybe<QuestionnaireResponseItem>>>
  /** Date Time Value. */
  valueDateTime?: Maybe<PartialDateTime>
  /** Boolean Value. */
  valueBoolean?: Maybe<Scalars['Boolean']>
  /** String Value. */
  valueString?: Maybe<Scalars['String']>
  /** Coding Value. */
  valueCoding?: Maybe<Coding>
}

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export type Questionnaire = {
  /** Concept that represents the overall questionnaire. */
  code?: Maybe<Array<Maybe<Coding>>>
  /** Contact details for the publisher. */
  contact?: Maybe<Array<Maybe<ContactDetail>>>
  /** Use and/or publishing restrictions. */
  copyright?: Maybe<Scalars['String']>
  /** Date last changed. */
  date?: Maybe<PartialDateTime>
  /** Natural language description of the questionnaire. */
  description?: Maybe<Scalars['String']>
  /** For testing purposes, not real usage. */
  experimental?: Maybe<Scalars['Boolean']>
  /** Additional identifier for the questionnaire. */
  identifier: Array<Maybe<Identifier>>
  /** Questions and sections within the Questionnaire. */
  item?: Maybe<Array<Maybe<QuestionnaireItem>>>
  /** Intended jurisdiction for questionnaire (if applicable). */
  jurisdiction?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Name for this questionnaire (computer friendly). */
  name?: Maybe<Scalars['String']>
  /** Name of the publisher (organization or individual). */
  publisher?: Maybe<Scalars['String']>
  /** Why this questionnaire is defined. */
  purpose?: Maybe<Scalars['String']>
  /** Why this questionnaire is defined. */
  status: QuestionnairePublicationStatus
  /** Name for this questionnaire (human friendly). */
  title?: Maybe<Scalars['String']>
  /** Canonical identifier for this questionnaire, represented as a URI (globally unique). */
  url?: Maybe<Scalars['String']>
  /** The context that the content is intended to support. */
  useContext?: Maybe<Array<Maybe<UsageContext>>>
  /** Business version of the questionnaire. */
  version?: Maybe<Scalars['String']>
  /** When the questionnaire was approved by publisher. */
  approvalDate?: Maybe<PartialDateTime>
  /** Instantiates protocol or definition. */
  derivedFrom?: Maybe<Array<Maybe<ResourceReference>>>
  /** When the questionnaire is expected to be used. */
  effectivePeriod?: Maybe<Period>
  /** Resource that can be subject of QuestionnaireResponse. */
  subjectType?: Maybe<Array<Maybe<Scalars['String']>>>
  /** When the questionnaire was last reviewed. */
  lastReviewDate?: Maybe<PartialDateTime>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
}

/** Questions and sections within the Questionnaire. */
export type QuestionnaireItem = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Corresponding concept for this item in a terminology. */
  code?: Maybe<Array<Maybe<Coding>>>
  /** ElementDefinition - details for the item. */
  definition?: Maybe<Scalars['String']>
  /** Nested questionnaire response items. */
  item?: Maybe<Array<Maybe<QuestionnaireItem>>>
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
  /** Unique id for item in questionnaire. */
  linkId?: Maybe<Scalars['String']>
}

export enum QuestionnaireItemTypeCode {
  Group = 'GROUP',
  Display = 'DISPLAY',
  QuestionBoolean = 'QUESTION_BOOLEAN',
  QuestionDate = 'QUESTION_DATE',
  QuestionString = 'QUESTION_STRING',
  QuestionStringBbCode = 'QUESTION_STRING_BB_CODE',
  QuestionStringHtml = 'QUESTION_STRING_HTML',
  QuestionCoding = 'QUESTION_CODING',
}

export enum QuestionnairePublicationStatus {
  Draft = 'DRAFT',
  Active = 'ACTIVE',
  Retired = 'RETIRED',
  Unknown = 'UNKNOWN',
}

export enum QuestionnaireResponseStatus {
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
  Amended = 'AMENDED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Stopped = 'STOPPED',
}

export type ConditionOnset = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  age?: Maybe<Quantity>
  period?: Maybe<Period>
  range?: Maybe<Range>
  string?: Maybe<Scalars['String']>
  dateTime?: Maybe<PartialDateTime>
}

export type ConditionStage = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  assessment?: Maybe<Array<Maybe<ResourceReference>>>
  summary?: Maybe<CodeableConcept>
}

export enum ConditionVerificationStatus {
  Provisional = 'PROVISIONAL',
  Differential = 'DIFFERENTIAL',
  Confirmed = 'CONFIRMED',
  Refuted = 'REFUTED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Unknown = 'UNKNOWN',
}

/** A continuation of Condition resources. */
export type ConditionContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
  /** The continuation of Condition resources. */
  resources: Array<Maybe<Condition>>
}

export enum ConditionAdmissionPeriodType {
  All = 'ALL',
  Current = 'CURRENT',
  Past = 'PAST',
}

export enum SortOptionType {
  Alphabetical = 'ALPHABETICAL',
  MostRecent = 'MOST_RECENT',
}

/** https://hl7.org/fhir/2018May/guidanceresponse.html */
export type Guidance = {
  /** The identifier of the request associated with this response, if any. */
  requestIdentifier?: Maybe<Identifier>
  /** The guidance item. */
  note?: Maybe<Array<Maybe<Annotation>>>
  /** Describes the reason for the guidance response in coded or textual form. */
  reasonCode?: Maybe<CodeableConcept>
  /** http://hl7.org/fhir/ValueSet/guidance-response-status */
  status: GuidanceStatusCode
  /** When the guidance response was processed. */
  occuranceDateTime?: Maybe<PartialDateTime>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
}

export enum GuidanceStatusCode {
  Success = 'SUCCESS',
  DataRequested = 'DATA_REQUESTED',
  DataRequired = 'DATA_REQUIRED',
  InProgress = 'IN_PROGRESS',
  Failure = 'FAILURE',
  EnteredInError = 'ENTERED_IN_ERROR',
}

export type MedicationRequest = {
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
  status?: Maybe<MedicationRequestStatusType>
  intent?: Maybe<MedicationRequestIntentType>
  priority?: Maybe<MedicationRequestPriorityType>
  category?: Maybe<CodeableConcept>
  subject?: Maybe<ResourceReference>
  context?: Maybe<ResourceReference>
  authoredOn?: Maybe<PartialDateTime>
  reasonCode?: Maybe<Array<Maybe<CodeableConcept>>>
  reasonReference?: Maybe<ResourceReference>
  medicationReference?: Maybe<MedicationType>
  dosageInstruction?: Maybe<Array<Maybe<DosageType>>>
  note?: Maybe<Array<Maybe<Annotation>>>
  supportingInformation?: Maybe<Array<Maybe<ResourceReference>>>
  identifier?: Maybe<Array<Maybe<Identifier>>>
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
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
  code?: Maybe<CodeableConcept>
  isBrand?: Maybe<Scalars['Boolean']>
  form?: Maybe<CodeableConcept>
}

export type DosageType = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  sequence?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  additionalInstruction?: Maybe<Array<Maybe<CodeableConcept>>>
  patientInstruction?: Maybe<Scalars['String']>
  timing?: Maybe<TimingType>
  asNeededBoolean?: Maybe<Scalars['Boolean']>
  asNeededCodeableConcept?: Maybe<CodeableConcept>
  site?: Maybe<CodeableConcept>
  route?: Maybe<CodeableConcept>
  method?: Maybe<CodeableConcept>
  doseRange?: Maybe<Range>
  doseQuantity?: Maybe<Quantity>
  maxDosePerPeriod?: Maybe<Range>
  maxDosePerAdministration?: Maybe<Quantity>
  rateRatio?: Maybe<Ratio>
  rateRange?: Maybe<Range>
  rateQuantity?: Maybe<Quantity>
}

export type TimingType = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  event?: Maybe<Array<Maybe<PartialDateTime>>>
  code?: Maybe<CodeableConcept>
  repeat?: Maybe<TimingRepeatType>
}

export type TimingRepeatType = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  boundsRange?: Maybe<Range>
  boundsPeriod?: Maybe<Period>
  boundsDuration?: Maybe<Quantity>
  count?: Maybe<Scalars['Int']>
  countMax?: Maybe<Scalars['Int']>
  duration?: Maybe<Scalars['Decimal']>
  durationMax?: Maybe<Scalars['Decimal']>
  durationUnit?: Maybe<UnitsOfTimeType>
  frequency?: Maybe<Scalars['Int']>
  frequencyMax?: Maybe<Scalars['Int']>
  period?: Maybe<Scalars['Decimal']>
  periodMax?: Maybe<Scalars['Decimal']>
  periodUnit?: Maybe<UnitsOfTimeType>
  daysOfWeek?: Maybe<DaysOfWeekType>
  timeOfDay?: Maybe<Array<Maybe<Scalars['String']>>>
  when?: Maybe<Array<Maybe<Scalars['String']>>>
  offSet?: Maybe<Scalars['Int']>
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  numerator?: Maybe<Quantity>
  denominator?: Maybe<Quantity>
}

/** A continuation of Medication Request resources. */
export type MedicationRequestContinuationType = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
  /** The continuation of Medication Request resources. */
  resources: Array<Maybe<MedicationRequest>>
}

/** The patient resource represents the patient involved in the provision of healthcare related services. */
export type Patient = {
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
  /** An identifier for this patient. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** Whether this patient's record is in active use. */
  active?: Maybe<Scalars['Boolean']>
  /** A name associated with the patient. */
  name: Array<Maybe<HumanName>>
  /** A contact detail for the individual. */
  telecom?: Maybe<Array<Maybe<ContactPoint>>>
  /** The gender of a person used for administrative purposes. */
  gender?: Maybe<AdministrativeGenderCode>
  /** The date of birth for the individual. */
  birthDate?: Maybe<PartialDateTime>
  /** Indicates if the individual is deceased or not. */
  deceased?: Maybe<PatientDeceased>
  /** Addresses for the individual. */
  address?: Maybe<Array<Maybe<Address>>>
  /** Marital (civil) status of a patient. https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-MaritalStatus-1 */
  maritalStatus?: Maybe<CodeableConcept>
  /** Whether patient is part of a multiple birth. */
  multipleBirth?: Maybe<PatientMultipleBirth>
  /** Image of the patient. */
  photo?: Maybe<Array<Maybe<Attachment>>>
  /** A contact party (e.g. guardian, partner, friend) for the patient. */
  contact?: Maybe<Array<Maybe<PatientContact>>>
  /** Patient's nominated primary care provider. */
  generalPractitioner?: Maybe<Array<Maybe<ResourceReference>>>
  /** Organization that is the custodian of the patient record. */
  managingOrganization?: Maybe<Array<Maybe<ResourceReference>>>
  /** Link to another patient resource that concerns the same actual person. */
  link?: Maybe<Array<Maybe<PatientLink>>>
}

/** A name of a human with text, parts and usage information. */
export type HumanName = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** http://hl7.org/fhir/stu3/valueset-name-use.html */
  use?: Maybe<HumanNameUseCode>
  /** Text representation of the full name. */
  text?: Maybe<Scalars['String']>
  /** Family name (often called 'Surname'). */
  family?: Maybe<Scalars['String']>
  /** Given names (not always 'first'). Includes middle names. This repeating element order: Given Names appear in the correct order for presenting the name. */
  given?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Parts that come before the name. This repeating element order: Prefixes appear in the correct order for presenting the name. */
  prefix?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Parts that come after the name. This repeating element order: Suffixes appear in the correct order for presenting the name. */
  suffix?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Time period when name was/is in use. */
  period?: Maybe<Period>
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

/** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-AdministrativeGender-1l */
export enum AdministrativeGenderCode {
  Male = 'MALE',
  Female = 'FEMALE',
  Other = 'OTHER',
  Unknown = 'UNKNOWN',
}

/** Indicates if the individual is deceased or not. */
export type PatientDeceased = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Indicates if the individual is deceased or not. */
  deceasedBoolean?: Maybe<Scalars['Boolean']>
  /** Indicates when the patient died. */
  deceasedDateTime?: Maybe<PartialDateTime>
}

/** An address expressed using postal conventions (as opposed to GPS or other location definition formats). This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery. There are a variety of postal address formats defined around the world. */
export type Address = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** http://hl7.org/fhir/stu3/valueset-address-use.html */
  use?: Maybe<AddressUseCode>
  /** http://hl7.org/fhir/stu3/valueset-address-type.html */
  type?: Maybe<AddressTypeCode>
  /** Text representation of the address. */
  text?: Maybe<Scalars['String']>
  /** Street name, number, direction & P.O. Box etc. This repeating element order: The order in which lines should appear in an address label. */
  line?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Name of city, town etc. */
  city?: Maybe<Scalars['String']>
  /** District name (aka county). */
  district?: Maybe<Scalars['String']>
  /** Sub-unit of country (abbreviations ok). */
  state?: Maybe<Scalars['String']>
  /** Postal code for area. */
  postalCode?: Maybe<Scalars['String']>
  /** Country (e.g. can be ISO 3166 2 or 3 letter code). */
  country?: Maybe<Scalars['String']>
  /** Time period when address was/is in use. */
  period?: Maybe<Period>
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Whether patient is part of a multiple birth. */
  multipleBirthBoolean?: Maybe<Scalars['Boolean']>
  /** Whether patient is part of a multiple birth. */
  multipleBirthInteger?: Maybe<Scalars['Int']>
}

/** A contact party (e.g. guardian, partner, friend) for the patient. */
export type PatientContact = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The nature of the relationship between a patient and a contact person for that patient. http://hl7.org/fhir/stu3/ValueSet/v2-0131 */
  relationship?: Maybe<Array<Maybe<CodeableConcept>>>
  /** A name associated with the contact person. */
  name: HumanName
  /** A contact detail for the person. */
  telecom?: Maybe<Array<Maybe<ContactPoint>>>
  /** Address for the contact person. */
  address?: Maybe<Address>
  /** The gender of a person used for administrative purposes. */
  gender?: Maybe<AdministrativeGenderCode>
  /** Organization that is associated with the contact. */
  organization?: Maybe<ResourceReference>
  /** The period during which this contact person or organization is valid to be contacted relating to this patient. */
  period?: Maybe<Period>
}

/** Link to another patient resource that concerns the same actual person. */
export type PatientLink = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
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

/** A continuation of Questionnaire Response resources. */
export type QuestionnaireResponseContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
  /** The continuation of Questionnaire Response resources. */
  resources: Array<Maybe<QuestionnaireResponse>>
}

/** A continuation of Task resources. */
export type TaskContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
  /** The continuation of Task resources. */
  resources: Array<Maybe<Task>>
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
  /** proposal | plan | order */
  intent: IntentCode
  /** normal | urgent | asap | stat */
  priority?: Maybe<PriorityCode>
  /** EHR task status */
  status: TaskStatusCode
  /** The action to be performed */
  performerType: CodeableConcept
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
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

/** A continuation of TerminologyItem resources. */
export type TerminologyItemContinuation = {
  /** The first cursor token. */
  firstCursorToken?: Maybe<Scalars['String']>
  /** The next cursor token. */
  nextCursorToken?: Maybe<Scalars['String']>
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
  /** The continuation of TerminologyItem resources. */
  resources: Array<Maybe<TerminologyItem>>
}

/** The terminology item resource represents the terminology for an item in a particular coding system and version for a particular organisation. */
export type TerminologyItem = {
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Code for item */
  coding: Coding
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
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** The sources of the available data. */
  dataSources?: Maybe<Array<Maybe<Coding>>>
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
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
  /** The continuation of Encounter resources. */
  resources: Array<Maybe<Encounter>>
}

/** The encounter resource represents an encounter between a care professional and the patient (or patient's record). */
export type Encounter = {
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** http://hl7.org/fhir/stu3/valueset-encounter-status.html */
  status?: Maybe<EncounterStatusCode>
  /** List of past encounter statuses. */
  statusHistory?: Maybe<Array<Maybe<EncounterStatusHistory>>>
  /** http://hl7.org/fhir/stu3/v3/ActEncounterCode/vs.html */
  class?: Maybe<Coding>
  /** List of past encounter classes. */
  classHistory?: Maybe<Array<Maybe<EncounterClassHistory>>>
  /** http://hl7.org/fhir/stu3/valueset-encounter-type.html */
  type?: Maybe<Array<Maybe<CodeableConcept>>>
  /** http://hl7.org/fhir/stu3/v3/ActPriority/vs.html */
  priority?: Maybe<CodeableConcept>
  /** Episode(s) of care that this encounter should be recorded against. */
  episodeOfCare?: Maybe<Array<Maybe<ResourceReference>>>
  /** The ReferralRequest that initiated this encounter. */
  incomingReferral?: Maybe<Array<Maybe<ResourceReference>>>
  /** http://hl7.org/fhir/stu3/v3/ActPriority/vs.html */
  participant?: Maybe<Array<Maybe<EncounterParticipant>>>
  /** The appointment that scheduled this encounter. */
  appointment?: Maybe<ResourceReference>
  /** The start and end time of the encounter. */
  period?: Maybe<Period>
  /** Quantity of time the encounter lasted (less time absent). */
  length?: Maybe<Quantity>
  /** http://hl7.org/fhir/stu3/valueset-encounter-reason.html */
  reason?: Maybe<Array<Maybe<CodeableConcept>>>
  /** The list of diagnosis relevant to this encounter. */
  diagnosis?: Maybe<Array<Maybe<EncounterDiagnosis>>>
  /** The set of accounts that may be used for billing for this Encounter. */
  account?: Maybe<ResourceReference>
  /** AuthDetails about the admission to a healthcare service. */
  hospitalization?: Maybe<EncounterHospitalisation>
  /** List of locations where the patient has been. */
  location?: Maybe<Array<Maybe<EncounterLocation>>>
  /** The custodian organization of this Encounter record. */
  serviceProvider?: Maybe<ResourceReference>
  /** Another Encounter this encounter is part of. */
  partOf?: Maybe<ResourceReference>
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** http://hl7.org/fhir/stu3/valueset-encounter-status.html */
  status?: Maybe<EncounterStatusCode>
  /** The time that the episode was in the specified status. */
  period: Period
}

/** List of past encounter classes. */
export type EncounterClassHistory = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** http://hl7.org/fhir/stu3/v3/ActEncounterCode/vs.html */
  class: Coding
  /** The time that the episode was in the specified status. */
  period: Period
}

/** List of participants involved in the encounter. */
export type EncounterParticipant = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** http://hl7.org/fhir/stu3/valueset-encounter-participant-type.html */
  type?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Period of time during the encounter that the participant participated. */
  period?: Maybe<Period>
  /** Persons involved in the encounter other than the patient. */
  individual?: Maybe<ResourceReference>
}

/** The list of diagnosis relevant to this encounter. */
export type EncounterDiagnosis = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Reason the encounter takes place (resource). */
  condition?: Maybe<ResourceReference>
  /** http://hl7.org/fhir/stu3/valueset-diagnosis-role.html */
  role?: Maybe<CodeableConcept>
  /** Ranking of the diagnosis (for each role type). */
  rank?: Maybe<Scalars['Int']>
}

/** AuthDetails about the admission to a healthcare service. */
export type EncounterHospitalisation = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Pre-admission identifier. */
  preAdmissionIdentifier?: Maybe<Identifier>
  /** The location from which the patient came before admission. */
  origin?: Maybe<ResourceReference>
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-SourceOfAdmission-1 */
  admitSource?: Maybe<CodeableConcept>
  /** http://hl7.org/fhir/stu3/ValueSet/v2-0092 */
  reAdmission?: Maybe<CodeableConcept>
  /** http://hl7.org/fhir/stu3/valueset-encounter-diet.html */
  dietPreference?: Maybe<Array<Maybe<CodeableConcept>>>
  /** http://hl7.org/fhir/stu3/valueset-encounter-special-courtesy.html */
  specialCourtesy?: Maybe<Array<Maybe<CodeableConcept>>>
  /** http://hl7.org/fhir/stu3/valueset-encounter-special-arrangements.html */
  specialArrangement?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Location to which the patient is discharged. */
  destination?: Maybe<ResourceReference>
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DischargeDestination-1 */
  dischargeDisposition?: Maybe<CodeableConcept>
}

/** List of locations where the patient has been. */
export type EncounterLocation = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Location the encounter takes place. */
  location: ResourceReference
  /** http://hl7.org/fhir/stu3/valueset-encounter-location-status.html */
  status?: Maybe<EncounterLocationStatusCode>
  /** Time period during which the patient was present at the location. */
  period?: Maybe<Period>
}

export enum EncounterLocationStatusCode {
  Planned = 'PLANNED',
  Active = 'ACTIVE',
  Reserved = 'RESERVED',
  Completed = 'COMPLETED',
}

/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export type CarePlan = {
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** Protocol or definition. */
  definition?: Maybe<Array<Maybe<ResourceReference>>>
  /** Fulfills care plan. */
  basedOn?: Maybe<Array<Maybe<ResourceReference>>>
  /** CarePlan replaced by this CarePlan. */
  replaces?: Maybe<Array<Maybe<ResourceReference>>>
  /** Part of referenced CarePlan. */
  partOf?: Maybe<Array<Maybe<ResourceReference>>>
  /** http://hl7.org/fhir/stu3/valueset-care-plan-status.html */
  status: CarePlanStatusCode
  /** http://hl7.org/fhir/stu3/valueset-care-plan-intent.html */
  intent: CarePlanIntentCode
  /** http://hl7.org/fhir/stu3/valueset-care-plan-category.html */
  category?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Human-friendly name for the CarePlan. */
  title?: Maybe<Scalars['String']>
  /** Summary of nature of plan. */
  description?: Maybe<Scalars['String']>
  /** Created in context of. */
  context?: Maybe<ResourceReference>
  /** Time period plan covers. */
  period?: Maybe<Period>
  /** Who is responsible for contents of the plan. */
  author?: Maybe<Array<Maybe<ResourceReference>>>
  /** Who's involved in plan? */
  careTeam?: Maybe<Array<Maybe<ResourceReference>>>
  /** Health issues this plan addresses. */
  addresses?: Maybe<Array<Maybe<ResourceReference>>>
  /** Information considered as part of plan. */
  supportingInfo?: Maybe<Array<Maybe<ResourceReference>>>
  /** Desired outcome of plan. */
  goal?: Maybe<Array<Maybe<ResourceReference>>>
  /** Action to occur as part of plan. */
  activity?: Maybe<CarePlanActivity>
  /** Comments about the plan. */
  note?: Maybe<Array<Maybe<Annotation>>>
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
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
  /** In-line definition of activity. */
  detail?: Maybe<CarePlanActivityDetail>
}

/** In-line definition of activity. */
export type CarePlanActivityDetail = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** http://hl7.org/fhir/stu3/valueset-care-plan-activity-category.html */
  category?: Maybe<CodeableConcept>
  /** Protocol or definition. */
  definition?: Maybe<ResourceReference>
  /** http://hl7.org/fhir/stu3/valueset-care-plan-activity.html */
  code?: Maybe<CodeableConcept>
  /** http://hl7.org/fhir/stu3/valueset-activity-reason.html */
  reasonCode?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Condition triggering need for activity. */
  reasonReference?: Maybe<Array<Maybe<ResourceReference>>>
  /** Goals this activity relates to. */
  goal?: Maybe<Array<Maybe<ResourceReference>>>
  /** http://hl7.org/fhir/stu3/valueset-care-plan-activity-status.html */
  status: CarePlanActivityDetailStatusCode
  /** Reason for current status. */
  statusReason?: Maybe<Scalars['String']>
  /** Do NOT do. */
  prohibited?: Maybe<Scalars['Boolean']>
  /** Where it should happen. */
  location?: Maybe<ResourceReference>
  /** Who will be responsible? */
  performer?: Maybe<Array<Maybe<ResourceReference>>>
  /** What is to be administered/supplied. */
  product?: Maybe<CarePlanActivityDetailProduct>
  /** How to consume/day? */
  dailyAmount?: Maybe<Quantity>
  /** How much to administer/supply/consume. */
  quantity?: Maybe<Quantity>
  /** Extra info describing activity to perform. */
  description?: Maybe<Scalars['String']>
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** What is to be administered/supplied. */
  productReference?: Maybe<ResourceReference>
  /** What is to be administered/supplied. */
  productCodeableConcept?: Maybe<CodeableConcept>
}

/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export type EpisodeOfCare = {
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** http://hl7.org/fhir/stu3/valueset-episode-of-care-status.html */
  status: EpisodeOfCareStatusCode
  /** Past list of status codes (the current status may be included to cover the start date of the status). */
  statusHistory?: Maybe<Array<Maybe<EpisodeOfCareStatusHistory>>>
  /** http://hl7.org/fhir/stu3/valueset-episodeofcare-type.html */
  type?: Maybe<Array<Maybe<CodeableConcept>>>
  /** The list of diagnosis relevant to this episode of care. */
  diagnosis?: Maybe<Array<Maybe<EpisodeOfCareDiagnosis>>>
  /** Organization that assumes care. */
  managingOrganization?: Maybe<ResourceReference>
  /** Interval during responsibility is assumed. */
  period?: Maybe<Period>
  /** Originating Referral Request(s). */
  referralRequest?: Maybe<Array<Maybe<ResourceReference>>>
  /** Care manager/care co-ordinator for the patient. */
  careManager?: Maybe<ResourceReference>
  /** Other practitioners facilitating this episode of care. */
  team?: Maybe<Array<Maybe<ResourceReference>>>
  /** The set of accounts that may be used for billing for this EpisodeOfCare. */
  account?: Maybe<ResourceReference>
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** http://hl7.org/fhir/stu3/valueset-episode-of-care-status.html */
  status: EncounterStatusCode
  /** Duration the EpisodeOfCare was in the specified status. */
  period: Period
}

/** The list of diagnosis relevant to this episode of care. */
export type EpisodeOfCareDiagnosis = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Conditions/problems/diagnoses this episode of care is for. */
  condition: ResourceReference
  /** http://hl7.org/fhir/stu3/valueset-diagnosis-role.html */
  role?: Maybe<CodeableConcept>
  /** Ranking of the diagnosis (for each role type). */
  rank?: Maybe<Scalars['Int']>
}

/** Community Treatment Order – LYPFT Custom Resource. */
export type LypftCommunityTreatmentOrder = {
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
  /** The legal status of the treatment order. */
  legalStatus?: Maybe<CodeableConcept>
  /** The time period of the treatment order. */
  period: Period
  /** ?Needs more information from LYPFT? */
  restrictions?: Maybe<Scalars['String']>
  /** ?Needs more information from LYPFT? */
  consentToTreat?: Maybe<Scalars['String']>
}

/** The DocumentReference resource is used to describe a document that is made available to a healthcare system. */
export type DocumentReference = {
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
  /** Master Version Specific Identifier. */
  masterIdentifier?: Maybe<Identifier>
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** http://hl7.org/fhir/stu3/valueset-document-reference-status.html */
  status: DocumentReferenceStatusCode
  /** http://hl7.org/fhir/stu3/valueset-composition-status.html */
  docStatus?: Maybe<DocumentReferenceDocStatusCode>
  /** https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-DocumentType-1 */
  type: CodeableConcept
  /** http://hl7.org/fhir/stu3/valueset-c80-doc-classcodes.html */
  class?: Maybe<CodeableConcept>
  /** Document creation time. */
  created?: Maybe<PartialDateTime>
  /** When this document reference was created. */
  indexed: PartialDateTime
  /** Who and/or what authored the document. */
  author?: Maybe<Array<Maybe<ResourceReference>>>
  /** Who/what authenticated the document. */
  authenticator?: Maybe<ResourceReference>
  /** Organization which maintains the document. */
  custodian?: Maybe<ResourceReference>
  /** Relationships to other documents. */
  relatesTo?: Maybe<Array<Maybe<DocumentReferenceRelatesTo>>>
  /** Human-readable description (title). */
  description?: Maybe<Scalars['String']>
  /** Document security-tags. */
  securityLabel?: Maybe<Array<Maybe<ResourceReference>>>
  /** Document referenced. */
  content: Array<Maybe<DocumentReferenceContent>>
  /** Clinical context of document. */
  context?: Maybe<DocumentReferenceContext>
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** http://hl7.org/fhir/stu3/valueset-document-relationship-type.html */
  code: DocumentReferenceRelatesToCode
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Where to access the document. */
  attachment: Attachment
  /** Format/content rules for the document. */
  format?: Maybe<Coding>
}

/** Clinical context of document. */
export type DocumentReferenceContext = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Context of the document content. */
  encounter?: Maybe<DocumentReference>
  /** Main clinical acts documented. */
  event?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Time of service that is being documented. */
  period?: Maybe<Period>
  /** Kind of facility where patient was seen. */
  facilityType?: Maybe<CodeableConcept>
  /** Additional details about where the content was created (e.g. clinical specialty). */
  practiceSetting?: Maybe<CodeableConcept>
  /** Patient demographics from source. */
  sourcePatientInfo?: Maybe<DocumentReference>
  /** Related identifiers or resources. */
  related?: Maybe<Array<Maybe<DocumentReferenceRelated>>>
}

/** Related identifiers or resources. */
export type DocumentReferenceRelated = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Identifier of related objects or events. */
  identifier?: Maybe<Identifier>
  /** Related Resource. */
  ref?: Maybe<ResourceReference>
}

/** Prospective warnings of potential issues when providing care to the patient. */
export type Flag = {
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
  /** Business identifiers. */
  identifier?: Maybe<Array<Maybe<Identifier>>>
  /** http://hl7.org/fhir/stu3/valueset-flag-status.html */
  status: FlagStatusCode
  /** http://hl7.org/fhir/stu3/valueset-flag-category.html */
  category?: Maybe<CodeableConcept>
  /** http://hl7.org/fhir/stu3/valueset-flag-code.html */
  code: CodeableConcept
  /** Time period when flag is active. */
  period?: Maybe<Period>
  /** Flag creator. */
  author?: Maybe<ResourceReference>
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
  /** The self cursor token. */
  selfCursorToken: Scalars['String']
  /** The total number of resources available (if known). */
  totalResources?: Maybe<Scalars['Int']>
  /** The continuation of DocumentReference resources. */
  resources: Array<Maybe<DocumentReference>>
}

/** https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Observation-1 */
export type Observation = {
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Flag to state whether the resource should be displayed as entered in error in user interface */
  isEnteredInError?: Maybe<Scalars['Boolean']>
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
  identifier?: Maybe<Array<Maybe<Identifier>>>
  interpretation?: Maybe<CodeableConcept>
  issued?: Maybe<PartialDateTime>
  method?: Maybe<CodeableConcept>
  performer?: Maybe<Array<Maybe<ResourceReference>>>
  referenceRange?: Maybe<Array<Maybe<ObservationReferenceRange>>>
  related?: Maybe<Array<Maybe<ObservationReferenceRange>>>
  specimen?: Maybe<ResourceReference>
  status: ObservationStatusCode
  value?: Maybe<ObservationValue>
}

/** Component results */
export type ObservationComponent = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  code: CodeableConcept
  dataAbsentReason?: Maybe<CodeableConcept>
  interpretation?: Maybe<CodeableConcept>
  referenceRange?: Maybe<Array<Maybe<ObservationReferenceRange>>>
  value?: Maybe<ObservationValue>
}

/** Provides guide for interpretation */
export type ObservationReferenceRange = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  age?: Maybe<Range>
  appliesTo?: Maybe<Array<Maybe<CodeableConcept>>>
  high?: Maybe<Quantity>
  low?: Maybe<Quantity>
  text?: Maybe<Scalars['String']>
  type?: Maybe<CodeableConcept>
}

/** Actual result */
export type ObservationValue = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Decimal values with spaces, or "E" | "U" | "L" */
  data: Scalars['String']
  /** Number of sample points at each time point */
  dimensions: Scalars['Int']
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
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  effectivePeriod?: Maybe<Period>
  effectiveDateTime?: Maybe<PartialDateTime>
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
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** The users organisation unique identifier. */
  organisationIdentifier: Scalars['Guid']
  /** The Data Providers the User has access to. */
  dataProviderPermissions?: Maybe<Array<Maybe<DataProviderPermission>>>
  /** The Resources and Operations the user has access to. */
  entityPermissions?: Maybe<Array<Maybe<EntityPermission>>>
  /** The available Launch types the user can make. */
  launchPermissions?: Maybe<Array<Maybe<LaunchPermission>>>
  /** The username. */
  userName: Scalars['String']
  /** The users full name. */
  fullName: Scalars['String']
  /** The users contact coding */
  contact?: Maybe<Coding>
}

export enum DataProviderPermission {
  Ehr = 'EHR',
  Yhcr = 'YHCR',
  Lypft = 'LYPFT',
  GpConnect = 'GP_CONNECT',
}

/** Permission to perform one or more Operations on a given Entity. */
export type EntityPermission = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The Operation(s) the User can perform on the Entity. */
  actions: Array<EntityAction>
  /** The Entity the user has access to. */
  type: EntityType
  /** The Resource the user has access to. */
  resource?: Maybe<Scalars['String']>
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
  TeamMembership = 'TEAM_MEMBERSHIP',
  DiagnosisDashboard = 'DIAGNOSIS_DASHBOARD',
  FormTimelinePilot = 'FORM_TIMELINE_PILOT',
  OnlineForms = 'ONLINE_FORMS',
}

/** Permission to launch one or more Apps with the given Intents. */
export type LaunchPermission = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The Intent(s) the user can launch the App with. */
  intents: Array<Scalars['String']>
  /** The App the user can launch. */
  application: LaunchApp
  /** The Resource the user wishes to launch. */
  resource: Scalars['String']
}

export enum LaunchApp {
  FormsForHealth = 'FORMS_FOR_HEALTH',
}

/** An instance of a feature that is controlled via a toggle. */
export type FeatureToggle = {
  /** Unique id for inter-element referencing. */
  elementId?: Maybe<Scalars['String']>
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The feature instance the toggle controls. */
  featureFlag: FeatureInstance
  /** The status of the feature toggle. */
  isEnabled: Scalars['Boolean']
  /** The message to show (if status is message). */
  disabledMessage?: Maybe<Scalars['String']>
}

export enum FeatureInstance {
  FormsForHealthLaunch = 'FORMS_FOR_HEALTH_LAUNCH',
  GpConnectDataProvider = 'GP_CONNECT_DATA_PROVIDER',
  ResourceAuthorization = 'RESOURCE_AUTHORIZATION',
  YhcrDataProvider = 'YHCR_DATA_PROVIDER',
}

export type Mutation = {
  ehr?: Maybe<EhrMutation>
}

/** Mutations of the LTHT EHR. */
export type EhrMutation = {
  setConditionStatus?: Maybe<Condition>
  addConditions?: Maybe<Array<Maybe<Condition>>>
}

/** Mutations of the LTHT EHR. */
export type EhrMutationSetConditionStatusArgs = {
  patientGuid: Scalars['String']
  conditionId: Scalars['String']
  clinicalStatus?: Maybe<ConditionClinicalStatus>
  verificationStatus?: Maybe<ConditionVerificationStatus>
  template: Scalars['String']
}

/** Mutations of the LTHT EHR. */
export type EhrMutationAddConditionsArgs = {
  patientGuid: Scalars['String']
  conditions: ConditionMinimalInputList
  template: Scalars['String']
}

export type ConditionMinimalInputList = {
  resources: Array<Maybe<ConditionMinimalInput>>
}

export type ConditionMinimalInput = {
  id: Scalars['String']
  code: CodeableConceptInput
  onset?: Maybe<ConditionOnsetMinimalInput>
  clinicalStatus?: Maybe<ConditionClinicalStatus>
  verificationStatus?: Maybe<ConditionVerificationStatus>
}

/** A reference to one or more terminologies or ontologies but may also be defined by the provision of text. */
export type CodeableConceptInput = {
  /** Code defined by a terminology system. */
  coding?: Maybe<Array<Maybe<CodingInput>>>
  /** Symbol in syntax defined by the system. */
  text?: Maybe<Scalars['String']>
}

/** A defined concept using a symbol from a code system. */
export type CodingInput = {
  /** Symbol in syntax defined by the system. */
  code?: Maybe<Scalars['String']>
  /** Representation defined by the system. */
  display?: Maybe<Scalars['String']>
  /** Identity of the terminology system. */
  system?: Maybe<Scalars['String']>
  /** Version of the system - if relevant. */
  version?: Maybe<Scalars['String']>
}

export type ConditionOnsetMinimalInput = {
  dateTime: PartialDateTimeInput
}

/** A Date + Time, Year, Year + Month, or just a Time. */
export type PartialDateTimeInput = {
  /** yyyy-MM-dd'T'HH:mm:ss.FFFFFFFK, yyyy-MM-dd HH:mm:ss, yyyy-MM-dd, yyyy-MM, or yyyy. */
  text: Scalars['String']
}
