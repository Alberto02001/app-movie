import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	// ?api_key=13764af1ec2bb25500856704c5ce745f

	constructor(private http: HttpClient) { }

	getSearch(title: string): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US&query=${title}`);
	}

	getNowMovie(): Observable<any> {
		return this.http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US");
	}

	getTrendingTV(): Observable<any> {
		return this.http.get("https://api.themoviedb.org/3/trending/tv/day?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US");
	}

	getTopRatedMovie(): Observable<any> {
		return this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US");
	}

	getTopRatedTV(): Observable<any> {
		return this.http.get("https://api.themoviedb.org/3/tv/top_rated?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US");
	}

	getPopularMovie(): Observable<any> {
		return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US");
	}

	getPopularTV(): Observable<any> {
		return this.http.get("https://api.themoviedb.org/3/tv/popular?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US");
	}

	getMovie(id : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US`);
	}

	getTV(id : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US`);
	}

}
