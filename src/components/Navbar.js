table {
    border-collapse: collapse;
    width: 30%;
    margin-bottom: 0.5rem;
    padding: 1rem;
    word-wrap: break-word;

  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 1em;
    word-wrap: break-word;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  .tbtn span{
    padding: 3px;
  }
  .tbtn .btn1{
    padding: 4px;
    color: red;
    margin-bottom: 30px;
    cursor: pointer;
  }
  

  @media only screen and (max-width: 414px) {
    .register-container >form{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      border: 1px solid grey;
      box-shadow: 10px 10px 40px grey;
      
      }
      .register-container >form >input {
        padding: 15px;
        width: 100%;
        margin:10px 200px;
        /* border: none; */
        border-radius: 5px;
      }}

  @media only screen and (min-width: 912px) {
    .register-container >form{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 10px;
      border: 1px solid grey;
      box-shadow: 10px 10px 40px grey;
      
      }
      .register-container >form >input {
        padding: 35px;
        width: 100%;
        margin:10px 200px;
        /* border: none; */
        border-radius: 5px;
      }
}
}


/* login */
@media only screen and (max-width: 414px) {
.login-container >form{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border: 1px solid grey;
  box-shadow: 10px 10px 40px grey;
  
  }
  .login-container >form >input {
    padding: 15px;
    width: 100%;
    margin:10px 200px;
    /* border: none; */
    border-radius: 5px;
  }}

@media only screen and (max-width: 912px) {
.login-container >form{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border: 1px solid grey;
  box-shadow: 10px 10px 40px grey;
  
  }
  .login-container >form >input {
    padding: 15px;
    width: 100%;
    margin:10px 200px;
    /* border: none; */
    border-radius: 5px;
  }
}