import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";


@Injectable()
    export class HttpHeadersInterceptor implements HttpInterceptor {
        constructor(){}

        intercept(
            req: HttpRequest<any>,
            next: HttpHandler
        ): Observable<HttpEvent<any>> {
           req = req.clone({
               setHeaders: {
                   'x-rapidapi-key': '451e5aa035msh3602be26ae1e0b5p109abajsnfa21d886868d',
                   'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
               },
               setParams:{
                   key: 'ca4d1ce3fd4e4dc68b9d806e57989c5b',
               }
               
           })
           return next.handle(req);
        }
    }
