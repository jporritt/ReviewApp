export class Review{
    $key?:string;
    projectId?: string;
    pmId?: string;
    reviewerId: string;
    revieweeId: string;
    projectRole?: string;
    criteria: [{MI:number, TW:number, COMM:number}];
    criteriaComments:[{MIComments:string, TWComments:string, COMMComments:string}];
    created_at:string;

}