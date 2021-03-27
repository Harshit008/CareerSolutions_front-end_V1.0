import { Application } from "./Application";
import { Recruiter } from "./Recruiter";

export interface Jobs{
    jobId:number;
    jobTitle: string;
    jobDesc: string;
    jobField: string;
    employementType: string;
    ctc: number;
    experienceInYears: number;
    education: string;
    recruiter:Recruiter;
    //application:Application
}