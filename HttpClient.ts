import { Observable } from "rxjs/Rx"
import { Injectable } from "@angular/core"
import { Http, Response } from "@angular/http"

@Injectable()
export class HttpClient {

    constructor(public http: Http) {}

    public fetchAllUsers() {
        return this.http.get("/api/v1/users").map((res: Response) => res.json())
    }
}
