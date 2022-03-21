export class Member{
    public memberid:number;
    public username:string;
    public password:string;
    public email:string;
    public phoneno:string;

    public Member(){
        this.memberid = 0;
        this.username = "";
        this.password = "";
        this.email = "";
        this.phoneno = "";
    }
}