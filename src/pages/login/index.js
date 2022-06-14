import './index.scss';


export default function index() {
    
    return(
        <main className=''>
            <div class="login1">
       <div class="cont">
            <h1> Bem-vindo ao Login</h1>
            <p>Acesse sua conta agora mesmo. </p>
            <div class="botoes">
                <a class="cad" href="../menu/index.html"> Cadastrar </a>
                <a class="log" href="../menu2/index.html"> Login </a>
            </div>
           
       </div>

       <div class="cont2">
                <h2> Criar uma conta </h2>
            <div class="in-1">
               <label for="nome" > nome:</label>
               <input class="text" type="text" />
            </div>

            <div class="in-2">
               <label for="email" > email: </label>
               <input class="text" type="email" />
            </div>

            <div class="in-3">
                <label for="senha" > senha: </label>
                <input class="text" type="password" />
             </div>
            </div>

   </div>
        </main>
    )

}