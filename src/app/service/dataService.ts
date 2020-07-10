import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { prsnModel } from '../model/prsnModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/responseModel';

@Injectable({providedIn: 'root'})
export class DataService {
    constructor(private httpClient: HttpClient) { }
    baseUrl = "http://localhost:8080";
    savePersonDetails(prsnModel: prsnModel): Observable<ResponseModel> {
        return this.httpClient.post<ResponseModel>(this.baseUrl+'/person/addPersonDetails',prsnModel);
    }

    getPersonDetails(prsnId: number): Observable<ResponseModel> {
        return this.httpClient.get<ResponseModel>(this.baseUrl+'/person/getPersonDetails/'+prsnId);
    }

    listAllPersons(): Observable<ResponseModel> {
        return this.httpClient.get<ResponseModel>(this.baseUrl+'/person/getAllPersons');
    }

    runRequestNow(rqstId: number): Observable<ResponseModel>{
        return this.httpClient.get<ResponseModel>(this.baseUrl+'/batchRequest/runRqstNow/'+rqstId);
    }
    generateNewRequest(): Observable<ResponseModel>{
        return this.httpClient.get<ResponseModel>(this.baseUrl+'/batchRequest/generateNewRequest');
    }
    listAllRequests(): Observable<ResponseModel> {
        return this.httpClient.get<ResponseModel>(this.baseUrl+'/batchRequest/getAllRequests');
    }

    getBatchStats(envNm: string): Observable<ResponseModel>{
        return this.httpClient.get<ResponseModel>(this.baseUrl+'/readControlReport/getBatchStats/'+envNm);
    }
}