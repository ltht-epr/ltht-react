export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTimeOffset: string,
  Decimal: number,
  Date: string,
  DateTime: string,
  Milliseconds: number,
  Seconds: number,
};

export type AllergyIntolerance = {
  assertedDate?: Maybe<PartialDateTime>,
  asserter?: Maybe<ResourceReference>,
  category?: Maybe<Array<Maybe<AllergyIntoleranceCategoryCode>>>,
  clinicalStatus: AllergyIntoleranceClinicalStatusCode,
  code: CodeableConcept,
  criticality?: Maybe<AllergyIntoleranceCriticalityCode>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  id: Scalars['ID'],
  identifier?: Maybe<Array<Maybe<Identifier>>>,
  lastOccurrence?: Maybe<PartialDateTime>,
  metadata: Metadata,
  note?: Maybe<Array<Maybe<Annotation>>>,
  onSet?: Maybe<AllergyIntoleranceOnSet>,
  reaction?: Maybe<Array<Maybe<AllergyIntoleranceReaction>>>,
  recorder?: Maybe<ResourceReference>,
  text?: Maybe<Narrative>,
  type?: Maybe<AllergyIntoleranceTypeCode>,
  verificationStatus?: Maybe<AllergyIntoleranceVerificationStatusCode>,
};

export enum AllergyIntoleranceCategoryCode {
  Food = 'FOOD',
  Medication = 'MEDICATION',
  Environment = 'ENVIRONMENT',
  Biologic = 'BIOLOGIC'
}

export enum AllergyIntoleranceClinicalStatusCode {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Resolved = 'RESOLVED'
}

export enum AllergyIntoleranceCriticalityCode {
  Low = 'LOW',
  High = 'HIGH',
  UnableToAssess = 'UNABLE_TO_ASSESS'
}

export type AllergyIntoleranceOnSet = {
  extension?: Maybe<Array<Maybe<Extension>>>,
  onSetAge?: Maybe<Quantity>,
  onSetDateTime?: Maybe<PartialDateTime>,
  onSetPeriod?: Maybe<Period>,
  onSetRange?: Maybe<Range>,
  onSetString?: Maybe<Scalars['String']>,
};

export type AllergyIntoleranceReaction = {
  description?: Maybe<Scalars['String']>,
  exposureRoute?: Maybe<CodeableConcept>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  manifestation: Array<Maybe<CodeableConcept>>,
  note?: Maybe<Array<Maybe<Annotation>>>,
  onSet?: Maybe<PartialDateTime>,
  severity?: Maybe<AllergyIntoleranceReactionSeverityCode>,
  substance?: Maybe<CodeableConcept>,
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
  Unconfirmed = 'UNCONFIRMED',
  Confirmed = 'CONFIRMED',
  Refuted = 'REFUTED',
  EnteredInError = 'ENTERED_IN_ERROR'
}

export type Annotation = {
  author?: Maybe<ResourceReference>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  text: Scalars['String'],
  time?: Maybe<PartialDateTime>,
};

export type CarePlan = {
  activity?: Maybe<CarePlanActivity>,
  addresses?: Maybe<Array<Maybe<ResourceReference>>>,
  author?: Maybe<Array<Maybe<ResourceReference>>>,
  basedOn?: Maybe<Array<Maybe<ResourceReference>>>,
  careTeam?: Maybe<Array<Maybe<ResourceReference>>>,
  category?: Maybe<Array<Maybe<CodeableConcept>>>,
  context?: Maybe<ResourceReference>,
  definition?: Maybe<Array<Maybe<ResourceReference>>>,
  description?: Maybe<Scalars['String']>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  goal?: Maybe<Array<Maybe<ResourceReference>>>,
  id: Scalars['ID'],
  identifier?: Maybe<Array<Maybe<Identifier>>>,
  intent: CarePlanIntentCode,
  metadata: Metadata,
  note?: Maybe<Array<Maybe<Annotation>>>,
  partOf?: Maybe<Array<Maybe<ResourceReference>>>,
  period?: Maybe<Period>,
  replaces?: Maybe<Array<Maybe<ResourceReference>>>,
  status: CarePlanStatusCode,
  supportingInfo?: Maybe<Array<Maybe<ResourceReference>>>,
  text?: Maybe<Narrative>,
  title?: Maybe<Scalars['String']>,
};

export type CarePlanActivity = {
  detail?: Maybe<CarePlanActivityDetail>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  outcomeCodeableConcept?: Maybe<Array<Maybe<CodeableConcept>>>,
  outcomeReference?: Maybe<Array<Maybe<ResourceReference>>>,
  progress?: Maybe<Array<Maybe<Annotation>>>,
  reference?: Maybe<ResourceReference>,
};

export type CarePlanActivityDetail = {
  category?: Maybe<CodeableConcept>,
  code?: Maybe<CodeableConcept>,
  dailyAmount?: Maybe<Quantity>,
  definition?: Maybe<ResourceReference>,
  description?: Maybe<Scalars['String']>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  goal?: Maybe<Array<Maybe<ResourceReference>>>,
  location?: Maybe<ResourceReference>,
  performer?: Maybe<Array<Maybe<ResourceReference>>>,
  product?: Maybe<CarePlanActivityDetailProduct>,
  prohibited?: Maybe<Scalars['Boolean']>,
  quantity?: Maybe<Quantity>,
  reasonCode?: Maybe<Array<Maybe<CodeableConcept>>>,
  reasonReference?: Maybe<Array<Maybe<ResourceReference>>>,
  status: CarePlanActivityDetailStatusCode,
  statusReason?: Maybe<Scalars['String']>,
};

export type CarePlanActivityDetailProduct = {
  extension?: Maybe<Array<Maybe<Extension>>>,
  productCodeableConcept?: Maybe<CodeableConcept>,
  productReference?: Maybe<ResourceReference>,
};

export enum CarePlanActivityDetailStatusCode {
  NotStarted = 'NOT_STARTED',
  Scheduled = 'SCHEDULED',
  InProgress = 'IN_PROGRESS',
  OnHold = 'ON_HOLD',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
  Unknown = 'UNKNOWN'
}

export enum CarePlanIntentCode {
  Proposal = 'PROPOSAL',
  Plan = 'PLAN',
  Order = 'ORDER',
  Option = 'OPTION'
}

export enum CarePlanStatusCode {
  Draft = 'DRAFT',
  Active = 'ACTIVE',
  Suspended = 'SUSPENDED',
  Completed = 'COMPLETED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Cancelled = 'CANCELLED',
  Unknown = 'UNKNOWN'
}

export type CodeableConcept = {
  coding?: Maybe<Array<Maybe<Coding>>>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  text?: Maybe<Scalars['String']>,
};

export type Coding = {
  code?: Maybe<Scalars['String']>,
  display: Scalars['String'],
  extension?: Maybe<Array<Maybe<Extension>>>,
  system?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};





export type Ehr = {
  flags?: Maybe<Array<Maybe<Flag>>>,
  recordAvailability?: Maybe<RecordAvailability>,
};


export type EhrFlagsArgs = {
  patientGuid: Scalars['String']
};


export type EhrRecordAvailabilityArgs = {
  patientGuid: Scalars['String']
};

export type Encounter = {
  account?: Maybe<ResourceReference>,
  appointment?: Maybe<ResourceReference>,
  class?: Maybe<Coding>,
  classHistory?: Maybe<Array<Maybe<EncounterClassHistory>>>,
  diagnosis?: Maybe<Array<Maybe<EncounterDiagnosis>>>,
  episodeOfCare?: Maybe<Array<Maybe<ResourceReference>>>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  hospitalization?: Maybe<EncounterHospitalisation>,
  id: Scalars['ID'],
  identifier?: Maybe<Array<Maybe<Identifier>>>,
  incomingReferral?: Maybe<Array<Maybe<ResourceReference>>>,
  length?: Maybe<Quantity>,
  location?: Maybe<Array<Maybe<EncounterLocation>>>,
  metadata: Metadata,
  participant?: Maybe<Array<Maybe<EncounterParticipant>>>,
  partOf?: Maybe<ResourceReference>,
  period?: Maybe<Period>,
  priority?: Maybe<CodeableConcept>,
  reason?: Maybe<Array<Maybe<CodeableConcept>>>,
  serviceProvider?: Maybe<ResourceReference>,
  status?: Maybe<EncounterStatusCode>,
  statusHistory?: Maybe<Array<Maybe<EncounterStatusHistory>>>,
  text?: Maybe<Narrative>,
  type?: Maybe<Array<Maybe<CodeableConcept>>>,
};

export type EncounterClassHistory = {
  class: Coding,
  extension?: Maybe<Array<Maybe<Extension>>>,
  period: Period,
};

export type EncounterDiagnosis = {
  condition?: Maybe<ResourceReference>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  rank?: Maybe<Scalars['Int']>,
  role?: Maybe<CodeableConcept>,
};

export type EncounterHospitalisation = {
  admitSource?: Maybe<CodeableConcept>,
  destination?: Maybe<ResourceReference>,
  dietPreference?: Maybe<Array<Maybe<CodeableConcept>>>,
  dischargeDisposition?: Maybe<CodeableConcept>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  origin?: Maybe<ResourceReference>,
  preAdmissionIdentifier?: Maybe<Identifier>,
  reAdmission?: Maybe<CodeableConcept>,
  specialArrangement?: Maybe<Array<Maybe<CodeableConcept>>>,
  specialCourtesy?: Maybe<Array<Maybe<CodeableConcept>>>,
};

export type EncounterLocation = {
  extension?: Maybe<Array<Maybe<Extension>>>,
  location: ResourceReference,
  period?: Maybe<Period>,
  status?: Maybe<EncounterLocationStatusCode>,
};

export enum EncounterLocationStatusCode {
  Planned = 'PLANNED',
  Active = 'ACTIVE',
  Reserved = 'RESERVED',
  Completed = 'COMPLETED'
}

export type EncounterPage = {
  page: Scalars['Int'],
  pageSize: Scalars['Int'],
  resources: Array<Maybe<Encounter>>,
  totalResources?: Maybe<Scalars['Int']>,
};

export type EncounterParticipant = {
  extension?: Maybe<Array<Maybe<Extension>>>,
  individual?: Maybe<ResourceReference>,
  period?: Maybe<Period>,
  type?: Maybe<Array<Maybe<CodeableConcept>>>,
};

export enum EncounterStatusCode {
  Planned = 'PLANNED',
  Arrived = 'ARRIVED',
  Triaged = 'TRIAGED',
  InProgress = 'IN_PROGRESS',
  OnLeave = 'ON_LEAVE',
  Finished = 'FINISHED',
  Cancelled = 'CANCELLED',
  EnteredInError = 'ENTERED_IN_ERROR',
  Unknown = 'UNKNOWN'
}

export type EncounterStatusHistory = {
  extension?: Maybe<Array<Maybe<Extension>>>,
  period: Period,
  status?: Maybe<EncounterStatusCode>,
};

export type EpisodeOfCare = {
  account?: Maybe<ResourceReference>,
  careManager?: Maybe<ResourceReference>,
  diagnosis?: Maybe<Array<Maybe<EpisodeOfCareDiagnosis>>>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  id: Scalars['ID'],
  identifier?: Maybe<Array<Maybe<Identifier>>>,
  managingOrganization?: Maybe<ResourceReference>,
  metadata: Metadata,
  period?: Maybe<Period>,
  referralRequest?: Maybe<Array<Maybe<ResourceReference>>>,
  status: EpisodeOfCareStatusCode,
  statusHistory?: Maybe<Array<Maybe<EpisodeOfCareStatusHistory>>>,
  team?: Maybe<Array<Maybe<ResourceReference>>>,
  text?: Maybe<Narrative>,
  type?: Maybe<Array<Maybe<CodeableConcept>>>,
};

export type EpisodeOfCareDiagnosis = {
  condition: ResourceReference,
  extension?: Maybe<Array<Maybe<Extension>>>,
  rank?: Maybe<Scalars['Int']>,
  role?: Maybe<CodeableConcept>,
};

export enum EpisodeOfCareStatusCode {
  Planned = 'PLANNED',
  WaitList = 'WAIT_LIST',
  Active = 'ACTIVE',
  OnHold = 'ON_HOLD',
  Finished = 'FINISHED',
  Cancelled = 'CANCELLED',
  EnteredInError = 'ENTERED_IN_ERROR'
}

export type EpisodeOfCareStatusHistory = {
  extension?: Maybe<Array<Maybe<Extension>>>,
  period: Period,
  status: EncounterStatusCode,
};

export type Extension = {
  extension?: Maybe<Array<Maybe<Extension>>>,
  url: Scalars['String'],
  valueCodeableConcept?: Maybe<CodeableConcept>,
  valueString: Scalars['String'],
};

export type Flag = {
  author?: Maybe<ResourceReference>,
  category?: Maybe<CodeableConcept>,
  code: CodeableConcept,
  extension?: Maybe<Array<Maybe<Extension>>>,
  id: Scalars['ID'],
  identifier?: Maybe<Array<Maybe<Identifier>>>,
  metadata: Metadata,
  period?: Maybe<Period>,
  status: FlagStatusCode,
  text?: Maybe<Narrative>,
};

export enum FlagStatusCode {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  EnteredInError = 'ENTERED_IN_ERROR'
}

export type Identifier = {
  assigner?: Maybe<ResourceReference>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  period?: Maybe<Period>,
  system?: Maybe<Scalars['String']>,
  type?: Maybe<CodeableConcept>,
  use?: Maybe<IdentifierUseCode>,
  value: Scalars['String'],
};

export enum IdentifierUseCode {
  Usual = 'USUAL',
  Official = 'OFFICIAL',
  Temp = 'TEMP',
  Secondary = 'SECONDARY'
}

export type Lypft = {
  allergyIntolerances?: Maybe<Array<Maybe<AllergyIntolerance>>>,
  appointments?: Maybe<EncounterPage>,
  carePlans?: Maybe<Array<Maybe<CarePlan>>>,
  careTeams?: Maybe<Array<Maybe<EpisodeOfCare>>>,
  communityTreatmentOrders?: Maybe<Array<Maybe<LypftCommunityTreatmentOrder>>>,
  flags?: Maybe<Array<Maybe<Flag>>>,
  hospitalStays?: Maybe<Array<Maybe<Encounter>>>,
  recordAvailability?: Maybe<RecordAvailability>,
};


export type LypftAllergyIntolerancesArgs = {
  nhsNumber: Scalars['String'],
  clinicalStatus?: Maybe<Array<Maybe<AllergyIntoleranceClinicalStatusCode>>>
};


export type LypftAppointmentsArgs = {
  nhsNumber: Scalars['String'],
  status?: Maybe<Array<Maybe<EncounterStatusCode>>>,
  page?: Maybe<Scalars['Int']>,
  pageSize?: Maybe<Scalars['Int']>
};


export type LypftCarePlansArgs = {
  nhsNumber: Scalars['String']
};


export type LypftCareTeamsArgs = {
  nhsNumber: Scalars['String']
};


export type LypftCommunityTreatmentOrdersArgs = {
  nhsNumber: Scalars['String']
};


export type LypftFlagsArgs = {
  nhsNumber: Scalars['String']
};


export type LypftHospitalStaysArgs = {
  nhsNumber: Scalars['String']
};


export type LypftRecordAvailabilityArgs = {
  nhsNumber: Scalars['String']
};

export type LypftCommunityTreatmentOrder = {
  consentToTreat?: Maybe<Scalars['String']>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  id: Scalars['ID'],
  legalStatus?: Maybe<CodeableConcept>,
  metadata: Metadata,
  period: Period,
  restrictions?: Maybe<Scalars['String']>,
  text?: Maybe<Narrative>,
};

export type Metadata = {
  dataSources: Array<Maybe<Coding>>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  lastUpdated?: Maybe<Scalars['DateTimeOffset']>,
  versionId?: Maybe<Scalars['String']>,
};


export type Narrative = {
  div: Scalars['String'],
  extension?: Maybe<Array<Maybe<Extension>>>,
  status?: Maybe<NarrativeStatusCode>,
  text: Scalars['String'],
};

export enum NarrativeStatusCode {
  Generated = 'GENERATED',
  Extensions = 'EXTENSIONS',
  Additional = 'ADDITIONAL',
  Empty = 'EMPTY'
}

export type PartialDateTime = {
  kind?: Maybe<PartialDateTimeKindCode>,
  value?: Maybe<Scalars['DateTimeOffset']>,
};

export enum PartialDateTimeKindCode {
  Year = 'YEAR',
  YearMonth = 'YEAR_MONTH',
  Date = 'DATE',
  DateTime = 'DATE_TIME',
  Time = 'TIME'
}

export type Period = {
  end?: Maybe<PartialDateTime>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  start?: Maybe<PartialDateTime>,
};

export type Quantity = {
  code?: Maybe<Scalars['String']>,
  comparator?: Maybe<QuantityComparatorCode>,
  extension?: Maybe<Array<Maybe<Extension>>>,
  system?: Maybe<Scalars['String']>,
  unit?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['Decimal']>,
};

export enum QuantityComparatorCode {
  LessThan = 'LESS_THAN',
  LessOrEqualTo = 'LESS_OR_EQUAL_TO',
  GreaterOrEqualTo = 'GREATER_OR_EQUAL_TO',
  GreaterThan = 'GREATER_THAN'
}

export type Query = {
  ehr?: Maybe<Ehr>,
  lypft?: Maybe<Lypft>,
};

export type Range = {
  extension?: Maybe<Array<Maybe<Extension>>>,
  high?: Maybe<Quantity>,
  low?: Maybe<Quantity>,
};

export type RecordAvailability = {
  dataSources?: Maybe<Array<Maybe<Coding>>>,
  isRecordAvailable: Scalars['Boolean'],
};

export type ResourceReference = {
  display: Scalars['String'],
  extension?: Maybe<Array<Maybe<Extension>>>,
  identifier?: Maybe<Array<Maybe<Identifier>>>,
  reference?: Maybe<Scalars['String']>,
  typeName: Scalars['String'],
};

