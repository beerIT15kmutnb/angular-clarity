import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
    ) { }

    async getUser() {
      const url = `${this.apiUrl}/api/user`;
      return await this.http.get(url).toPromise();
    }

}
