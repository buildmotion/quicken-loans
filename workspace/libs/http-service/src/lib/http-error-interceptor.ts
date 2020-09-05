import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApiResponse, ApiMessage, ErrorApiResponse } from '@valencia/foundation';

export class HttpErrorInterceptor implements HttpInterceptor {
  displayToUser = true;
  doNotDisplayToUser: false;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  /**
   * Use to handle errors during HTTP/Web API operations. The caller expects
   * an Observable response - this method will either return the response from
   * the server or a new [ErrorApiResponse] as an Observable for the client to
   * handle.
   *
   * @param error The error from the HTTP response.
   */
  protected handleError(error: HttpErrorResponse): Observable<any> {
    const apiErrorResponse = new ErrorApiResponse();
    apiErrorResponse.IsSuccess = false;
    apiErrorResponse.Message = 'Unexpected HTTP error.';
    apiErrorResponse.Timestamp = new Date();

    // Use the base error object to determine if the error type is a general or an all-purpose error.
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      apiErrorResponse.Errors.push(new ApiMessage(`A client-side or network error occurred.`, false, ''));
      return throwError(apiErrorResponse);
    } else {
      // The API returned an unsuccessful response (failure status code).
      if (error instanceof ApiResponse) {
        /**
         * A known error response format from the API/Server; rethrow this response.
         *
         * Throwing the error sends the Observable to the subscriber of the response.
         * The subscriber or consumer should handle the response and display of messages.
         */
        return throwError(error);
      } else {
        // An unhandled error/exception - may not want to display this information to an end-user.
        apiErrorResponse.Errors.push(new ApiMessage(`${error.status}: ${error.statusText}. ${error.message}`, false, ''));
        return throwError(apiErrorResponse);
      }
    }
  }
}
