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

	getTopRatedMovie(page : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US&page=${page}`);
	}

	getTopRatedTV(page : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US&page=${page}`);
	}

	getPopularMovie(page : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US&page=${page}`);
	}

	getPopularTV(page : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US&page=${page}`);
	}

	getMovie(id : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US`);
	}

	getTV(id : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US`);
	}

	getMovieVideo(id : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US`);
	}

	getTVvideo(id : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US`);
	}

	getMovieCredits(id : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US`);
	}

	getTVcredits(id : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US`);
	}

	getMovieSimilar(id : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US`);
	}

	getTVsimilar(id : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US`);
	}

	getActorDetails(id : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/person/${id}?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US`);
	}

	getActorMovie(id : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US`);
	}

	getActorTV(id : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=13764af1ec2bb25500856704c5ce745f&language=en-US`);
	}

	getMovieGenres(id : any, page : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=13764af1ec2bb25500856704c5ce745f&with_genres=${id}&page=${page}`);
	}

	getTVGenres(id : any, page : any): Observable<any> {
		return this.http.get(`https://api.themoviedb.org/3/discover/tv?api_key=13764af1ec2bb25500856704c5ce745f&with_genres=${id}&page=${page}`);
	}


}
