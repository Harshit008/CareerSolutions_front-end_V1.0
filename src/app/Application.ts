import { Jobs } from "./Jobs";
import { JobSeeker } from "./JobSeeker";
import { Recruiter } from "./Recruiter";

export interface Application{
    applicationId:number;
    jobseeker: JobSeeker;
    job:Jobs;
    status:boolean;
}