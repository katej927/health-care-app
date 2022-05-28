export interface IResponse {
  userInfo: UserInfo; // user information
  wxcResultMap: WxcResultMap; //
  healthScoreList: HealthScoreList[];
  rtnCd: string;
  healthTagList: HealthTagList[];
}

interface HealthTagList {
  tagId: string;
  tag1: string;
  tag2: string;
  tag3: string;
}

interface HealthScoreList {
  SCORE: number;
  TYPE_CD: string;
  SUBMIT_DATE: string;
  CNTNS: string;
}

interface WxcResultMap {
  maxHis: number;
  medi_peer: number;
  wHage: number;
  wMymaxHscoreDy: number[];
  mediGapSum: number[];
  diabmlRate: number;
  ihd_peer: number;
  totalRate: number;
  his: number;
  contribution: Contribution;
  deathRate: number;
  wIdealHscoreDy: number[];
  idealMediDy: number[];
  mediIncreasePercent: number;
  s_contribution: Scontribution;
  hscore_peer: number;
  hscorePercent: number;
  totalCont: TotalCont;
  hdiseRate: number;
  sHage: number;
  paramMap: ParamMap;
  wMymaxHscore: number;
  topCont: TopCont;
  w_contribution: Wcontribution;
  ihd: number;
  wHscore: number;
  wHscoreDy: number[];
  percentList: PercentList;
  cancerRate: number;
  wIdealHscore: number;
  sex: number;
  mediExDy: number[];
  idealMedi: number;
  mediDy: number[];
  sHage_peer: number;
  medi: number;
  checkMap: CheckMap;
  maxIhd: number;
  maxSHage: number;
  idealMediExDy: number[];
  contribution_point: Contributionpoint;
  his_peer: number;
  mediSum: number[];
  boj: Boj;
  idealMediSum: number[];
  age: number;
}

interface Boj {
  resHDLCholesterol: string;
  resBMI: string;
  resUrinaryProtein: string;
  resBloodPressure: string;
  resTotalCholesterol: string;
  smkQty: string;
  resFastingBloodSuger: string;
  drnkQty: string;
  resGFR: string;
  exerciQty: string;
  resLDLCholesterol: string;
}

interface Contributionpoint {
  totalPoint: number;
  resBMI: number;
  resUrinaryProtein: number;
  resTotalCholesterol: number;
  resFastingBloodSuger: number;
  exerciQty: number;
}

interface CheckMap {
  etcdsePresc: number;
  dlpdPresc: number;
  fmlyCancer: number;
  apopPresc: number;
  dmPresc: number;
  phssPresc: number;
  smkQty: number;
  fmlyHdise: number;
  fmlyDiabml: number;
  hprtsPresc: number;
  fmlyApop: number;
  hdisePresc: number;
  drnkQty: number;
  exerciQty: number;
  fmlyHprts: number;
}

interface PercentList {
  resBMI: number;
  bpLwst: number;
  resHemoglobin: number;
  resALT: number;
  bpHigh: number;
  resTotalCholesterol: number;
  resFastingBloodSuger: number;
  resyGPT: number;
  resAST: number;
}

interface Wcontribution {
  resBMI: number;
  resUrinaryProtein: number;
  resTotalCholesterol: number;
  resFastingBloodSuger: number;
  exerciQty: number;
}

interface TopCont {
  topContValue: number;
  topContName: string;
}

interface ParamMap {
  resCheckupDate: string;
  apopPresc: number;
  constant: number;
  resSight: string;
  resSerumCreatinine: number;
  resWeight: number;
  phssPresc: number;
  smkQty: number;
  resAST: number;
  resOsteoporosis: string;
  resJudgement: string;
  fmlyDiabml: number;
  resWaist: number;
  resHDLCholesterol: number;
  resHemoglobin: number;
  bpLwst: number;
  resUrinaryProtein: string;
  fmlyApop: number;
  bpHigh: number;
  resCheckupPlace: string;
  resFastingBloodSuger: number;
  drnkQty: number;
  exerciQty: number;
  resLDLCholesterol: number;
  fmlyHprts: number;
  etcdsePresc: number;
  resTriglyceride: number;
  dlpdPresc: number;
  fmlyCancer: number;
  resALT: number;
  resTBChestDisease: string;
  dmPresc: number;
  sex: number;
  checkMap: string;
  fmlyHdise: number;
  resBMI: number;
  hprtsPresc: number;
  resHearing: string;
  resBloodPressure: string;
  resTotalCholesterol: number;
  hdisePresc: number;
  resCheckupYear: number;
  resHeight: number;
  resGFR: number;
  resyGPT: number;
  age: number;
}

interface TotalCont {
  resHDLCholesterol: number;
  resBMI: number;
  resUrinaryProtein: number;
  resTotalCholesterol: number;
  resFastingBloodSuger: number;
  exerciQty: number;
  resLDLCholesterol: number;
}

interface Scontribution {
  resHDLCholesterol: number;
  resBMI: number;
  resFastingBloodSuger: number;
  exerciQty: number;
  resLDLCholesterol: number;
}

interface Contribution {
  bloodPressure: BloodPressure;
  medical: Medical;
  bloodSugar: BloodSugar;
  weight: Weight;
  cholesterol: Cholesterol;
  life: Life;
}

interface Life {
  exerciQty: number;
}

interface Cholesterol {
  resHDLCholesterol: number;
  resTotalCholesterol: number;
  resLDLCholesterol: number;
}

interface Weight {
  resBMI: number;
}

interface BloodSugar {
  resFastingBloodSuger: number;
}

interface Medical {
  resUrinaryProtein: number;
}

interface BloodPressure {}

interface UserInfo {
  healthScript: string;
  healthScore: number;
  healthDate: string;
}
