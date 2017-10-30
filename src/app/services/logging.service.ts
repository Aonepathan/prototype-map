import { Subject } from 'rxjs/Subject';

export class LoggingService {

    public uid = '';
    public logSubject = new Subject<any>();

    constructor() { }

    info(msg: any)   {
        let date = new Date();
        const logevent = {
            'timestamp': date,
            'level': 'info',
            'uid': this.uid,
            'msg': msg,
        };
        this.logSubject.next(logevent);
    }

    debug(msg: any) {
        let date = new Date();
        const logevent = {
            'timestamp': date,
            'level': 'debug',
            'uid': this.uid,
            'msg': msg,
        };
        this.logSubject.next(logevent);
    }

    error(msg: any) {
        let date = new Date();
        const logevent = {
            'timestamp': date,
            'level': 'error',
            'uid': this.uid,
            'msg': msg,
        };
        this.logSubject.next(logevent);
    }

    warn(msg: any)  {
        let date = new Date();
        const logevent = {
            'timestamp': date,
            'level': 'warn',
            'uid': this.uid,
            'msg': msg,
        };
        this.logSubject.next(logevent);
    }

    // Timing metrics for API calls, etc.
    metric(event: string, time: number) {
        let date = new Date();
        const logevent = {
            'event': event,
            'uid': this.uid,
            'timeTaken': time,
        };
        this.logSubject.next(logevent);
    }

    // Specific user actions, ie: button
    action(action: string, detail?: string) {
        let date = new Date();
        const logevent = {
            'timestamp': date,
            'action': action,
            'uid': this.uid,
        };
        this.logSubject.next(logevent);
    }

    setUID(uid: string) {
        this.uid = uid;
    }

    getLogObservable() {
        return this.logSubject.asObservable();
    }


}
