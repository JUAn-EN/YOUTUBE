import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyDjyad5yjiPmXopZZJwHaIi4TzVcWGhNhk';
  private apiUrl = 'https://www.googleapis.com/youtube/v3/';

  constructor(private http: HttpClient) { }

  getVideosByKeyword(keyword: string, maxResults: number): Observable<any> {
    const url = `${this.apiUrl}search?key=${this.apiKey}&type=video&part=snippet&q=${keyword}&maxResults=${maxResults}`;
    return this.http.get(url).pipe(
      catchError(error => {
        console.error('Error fetching YouTube videos:', error);
        return throwError('Error al obtener los videos de YouTube. Por favor, inténtalo de nuevo más tarde.');
      })
    );
  }
}
