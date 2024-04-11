
import './App.css';



import Internacional from "./itens/Internacionais"
import Entradas from  './itens/Entradas'
import Nacional from './itens/Nacionais'
import NacionalxInternacional from './graficos/NacionalxInternacional';
import CalculaNacional from './calculos/CalculaNacional';
import CalculaInternacional from './calculos/CalculaInternacional'
import CalcularDescontoRecebido from './calculos/calcularDescontoRecebido'
import CalcularDescontoConedido from './calculos/CalcularDescontoConcedido'
import Central from './itens/central';
import DonutGraph from './itens/donut';
import DescontosTotal from './itens/descontos';




import RecebidosxConcedidos from './itens/recebidosConcedidos';

function App() {
  const nacional = CalculaNacional();
  const internacional = CalculaInternacional();

  console.log(nacional)
 
  const nacionalxInternacional = [nacional,internacional]

  const descontoRecebido = CalcularDescontoRecebido();
  const descontoConcedido = CalcularDescontoConedido();




  return (
    <div className="App">
      
    <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>


    
    <div style={{width: 409, height: 178, left: 246, top: 550, position: 'absolute', background: 'black', borderRadius: 30, border: '4px black solid'}} />


    
    <div style={{width: 409, height: 174, left: 240, top: 546, position: 'absolute', background: '#f4fe9a', borderRadius: 30, border: '4px black solid'}} />


    

  

    





   
      <Entradas></Entradas>
      <Nacional  qtd={nacional}></Nacional>
      <Internacional qtd={internacional}></Internacional>

      <RecebidosxConcedidos itens={[descontoRecebido,descontoConcedido]}></RecebidosxConcedidos>
      <NacionalxInternacional itens={nacionalxInternacional}/>
      
      <Central></Central>

      <DonutGraph></DonutGraph>
      <DescontosTotal qtd={descontoRecebido}></DescontosTotal>

    <div style={{width: 404, height: 867,top:25, left:1430, position: 'absolute', background: 'linear-gradient(170deg, #C2FCC0 0%, #DEFDAA 59%, #F2FD9B 100%)', borderRadius: 30, overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div style={{width: 200, height: 30,marginLeft:40, display:'flex',}}>
          
          <div style={{marginTop:30,marginLeft:-10}}>
  
<svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 23.7273C13.2571 23.7273 13.5085 23.65 13.7222 23.5051C13.936 23.3603 14.1026 23.1544 14.201 22.9135C14.2994 22.6727 14.3252 22.4076 14.275 22.1519C14.2249 21.8962 14.101 21.6613 13.9192 21.477C13.7374 21.2926 13.5058 21.1671 13.2536 21.1162C13.0014 21.0654 12.7401 21.0915 12.5025 21.1913C12.265 21.291 12.0619 21.46 11.9191 21.6767C11.7762 21.8935 11.7 22.1484 11.7 22.4091C11.7 22.7587 11.837 23.094 12.0808 23.3412C12.3246 23.5884 12.6552 23.7273 13 23.7273ZM19.5 23.7273C19.7571 23.7273 20.0085 23.65 20.2222 23.5051C20.436 23.3603 20.6026 23.1544 20.701 22.9135C20.7994 22.6727 20.8252 22.4076 20.775 22.1519C20.7249 21.8962 20.601 21.6613 20.4192 21.477C20.2374 21.2926 20.0058 21.1671 19.7536 21.1162C19.5014 21.0654 19.2401 21.0915 19.0025 21.1913C18.765 21.291 18.5619 21.46 18.4191 21.6767C18.2762 21.8935 18.2 22.1484 18.2 22.4091C18.2 22.7587 18.337 23.094 18.5808 23.3412C18.8246 23.5884 19.1552 23.7273 19.5 23.7273ZM19.5 18.4545C19.7571 18.4545 20.0085 18.3772 20.2222 18.2324C20.436 18.0875 20.6026 17.8817 20.701 17.6408C20.7994 17.3999 20.8252 17.1349 20.775 16.8792C20.7249 16.6235 20.601 16.3886 20.4192 16.2043C20.2374 16.0199 20.0058 15.8944 19.7536 15.8435C19.5014 15.7926 19.2401 15.8188 19.0025 15.9185C18.765 16.0183 18.5619 16.1872 18.4191 16.404C18.2762 16.6208 18.2 16.8757 18.2 17.1364C18.2 17.486 18.337 17.8213 18.5808 18.0685C18.8246 18.3157 19.1552 18.4545 19.5 18.4545ZM13 18.4545C13.2571 18.4545 13.5085 18.3772 13.7222 18.2324C13.936 18.0875 14.1026 17.8817 14.201 17.6408C14.2994 17.3999 14.3252 17.1349 14.275 16.8792C14.2249 16.6235 14.101 16.3886 13.9192 16.2043C13.7374 16.0199 13.5058 15.8944 13.2536 15.8435C13.0014 15.7926 12.7401 15.8188 12.5025 15.9185C12.265 16.0183 12.0619 16.1872 11.9191 16.404C11.7762 16.6208 11.7 16.8757 11.7 17.1364C11.7 17.486 11.837 17.8213 12.0808 18.0685C12.3246 18.3157 12.6552 18.4545 13 18.4545ZM22.1 2.63636H20.8V1.31818C20.8 0.968578 20.663 0.633294 20.4192 0.386086C20.1754 0.138879 19.8448 0 19.5 0C19.1552 0 18.8246 0.138879 18.5808 0.386086C18.337 0.633294 18.2 0.968578 18.2 1.31818V2.63636H7.8V1.31818C7.8 0.968578 7.66304 0.633294 7.41924 0.386086C7.17544 0.138879 6.84478 0 6.5 0C6.15522 0 5.82456 0.138879 5.58076 0.386086C5.33696 0.633294 5.2 0.968578 5.2 1.31818V2.63636H3.9C2.86566 2.63636 1.87368 3.053 1.14228 3.79462C0.410892 4.53624 0 5.5421 0 6.59091V25.0455C0 26.0943 0.410892 27.1001 1.14228 27.8417C1.87368 28.5834 2.86566 29 3.9 29H22.1C23.1343 29 24.1263 28.5834 24.8577 27.8417C25.5891 27.1001 26 26.0943 26 25.0455V6.59091C26 5.5421 25.5891 4.53624 24.8577 3.79462C24.1263 3.053 23.1343 2.63636 22.1 2.63636ZM23.4 25.0455C23.4 25.3951 23.263 25.7303 23.0192 25.9776C22.7754 26.2248 22.4448 26.3636 22.1 26.3636H3.9C3.55522 26.3636 3.22456 26.2248 2.98076 25.9776C2.73696 25.7303 2.6 25.3951 2.6 25.0455V13.1818H23.4V25.0455ZM23.4 10.5455H2.6V6.59091C2.6 6.24131 2.73696 5.90602 2.98076 5.65881C3.22456 5.41161 3.55522 5.27273 3.9 5.27273H5.2V6.59091C5.2 6.94051 5.33696 7.2758 5.58076 7.523C5.82456 7.77021 6.15522 7.90909 6.5 7.90909C6.84478 7.90909 7.17544 7.77021 7.41924 7.523C7.66304 7.2758 7.8 6.94051 7.8 6.59091V5.27273H18.2V6.59091C18.2 6.94051 18.337 7.2758 18.5808 7.523C18.8246 7.77021 19.1552 7.90909 19.5 7.90909C19.8448 7.90909 20.1754 7.77021 20.4192 7.523C20.663 7.2758 20.8 6.94051 20.8 6.59091V5.27273H22.1C22.4448 5.27273 22.7754 5.41161 23.0192 5.65881C23.263 5.90602 23.4 6.24131 23.4 6.59091V10.5455ZM6.5 18.4545C6.75712 18.4545 7.00846 18.3772 7.22224 18.2324C7.43602 18.0875 7.60265 17.8817 7.70104 17.6408C7.79944 17.3999 7.82518 17.1349 7.77502 16.8792C7.72486 16.6235 7.60105 16.3886 7.41924 16.2043C7.23743 16.0199 7.00579 15.8944 6.75362 15.8435C6.50144 15.7926 6.24006 15.8188 6.00251 15.9185C5.76497 16.0183 5.56194 16.1872 5.41909 16.404C5.27624 16.6208 5.2 16.8757 5.2 17.1364C5.2 17.486 5.33696 17.8213 5.58076 18.0685C5.82456 18.3157 6.15522 18.4545 6.5 18.4545ZM6.5 23.7273C6.75712 23.7273 7.00846 23.65 7.22224 23.5051C7.43602 23.3603 7.60265 23.1544 7.70104 22.9135C7.79944 22.6727 7.82518 22.4076 7.77502 22.1519C7.72486 21.8962 7.60105 21.6613 7.41924 21.477C7.23743 21.2926 7.00579 21.1671 6.75362 21.1162C6.50144 21.0654 6.24006 21.0915 6.00251 21.1913C5.76497 21.291 5.56194 21.46 5.41909 21.6767C5.27624 21.8935 5.2 22.1484 5.2 22.4091C5.2 22.7587 5.33696 23.094 5.58076 23.3412C5.82456 23.5884 6.15522 23.7273 6.5 23.7273Z" fill="black"/>
</svg>

          </div>
          
          <div style={{marginTop:30, marginLeft:30}}>
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4705 19.2705C13.4081 19.3394 13.35 19.412 13.2965 19.488C13.2416 19.5688 13.1977 19.6566 13.166 19.749C13.1242 19.8312 13.0949 19.9192 13.079 20.01C13.0719 20.1065 13.0719 20.2035 13.079 20.3C13.0741 20.4902 13.1138 20.6789 13.195 20.851C13.2601 21.0309 13.364 21.1943 13.4993 21.3297C13.6346 21.465 13.7981 21.5689 13.978 21.634C14.1516 21.7107 14.3392 21.7503 14.529 21.7503C14.7188 21.7503 14.9064 21.7107 15.08 21.634C15.2599 21.5689 15.4234 21.465 15.5587 21.3297C15.694 21.1943 15.7979 21.0309 15.863 20.851C15.9274 20.6747 15.9569 20.4876 15.95 20.3C15.9511 20.1092 15.9145 19.92 15.8424 19.7433C15.7702 19.5667 15.6639 19.406 15.5295 19.2705C15.3947 19.1346 15.2343 19.0267 15.0576 18.9531C14.8809 18.8795 14.6914 18.8416 14.5 18.8416C14.3086 18.8416 14.1191 18.8795 13.9424 18.9531C13.7657 19.0267 13.6053 19.1346 13.4705 19.2705ZM14.5 0C11.6322 0 8.82875 0.85041 6.44424 2.44369C4.05972 4.03697 2.20122 6.30156 1.10375 8.95109C0.00628262 11.6006 -0.280866 14.5161 0.27862 17.3288C0.838106 20.1415 2.2191 22.7252 4.24696 24.753C6.27482 26.7809 8.85847 28.1619 11.6712 28.7214C14.4839 29.2809 17.3994 28.9937 20.0489 27.8962C22.6984 26.7988 24.963 24.9403 26.5563 22.5558C28.1496 20.1712 29 17.3678 29 14.5C29 12.5958 28.6249 10.7103 27.8963 8.95109C27.1676 7.19187 26.0995 5.5934 24.753 4.24695C23.4066 2.9005 21.8081 1.83244 20.0489 1.10375C18.2897 0.375054 16.4042 0 14.5 0ZM14.5 26.1C12.2057 26.1 9.963 25.4197 8.05539 24.145C6.14778 22.8704 4.66098 21.0587 3.783 18.9391C2.90503 16.8195 2.67531 14.4871 3.1229 12.2369C3.57049 9.98677 4.67528 7.91985 6.29757 6.29756C7.91986 4.67527 9.98678 3.57048 12.237 3.12289C14.4871 2.6753 16.8195 2.90502 18.9391 3.783C21.0588 4.66097 22.8704 6.14777 24.145 8.05538C25.4197 9.96299 26.1 12.2057 26.1 14.5C26.1 17.5765 24.8779 20.527 22.7024 22.7024C20.527 24.8779 17.5765 26.1 14.5 26.1ZM14.5 7.25C13.7359 7.24951 12.9852 7.45027 12.3234 7.83209C11.6616 8.21391 11.112 8.7633 10.73 9.425C10.6251 9.59003 10.5546 9.77459 10.5229 9.96755C10.4912 10.1605 10.4988 10.3579 10.5453 10.5479C10.5918 10.7378 10.6763 10.9164 10.7936 11.0728C10.911 11.2293 11.0587 11.3604 11.228 11.4583C11.3973 11.5561 11.5847 11.6187 11.7788 11.6423C11.973 11.6659 12.1699 11.65 12.3577 11.5955C12.5455 11.541 12.7204 11.4491 12.8717 11.3252C13.0231 11.2014 13.1479 11.0483 13.2385 10.875C13.3663 10.6537 13.5502 10.4701 13.7717 10.3428C13.9933 10.2155 14.2445 10.149 14.5 10.15C14.8846 10.15 15.2534 10.3028 15.5253 10.5747C15.7972 10.8466 15.95 11.2154 15.95 11.6C15.95 11.9846 15.7972 12.3534 15.5253 12.6253C15.2534 12.8972 14.8846 13.05 14.5 13.05C14.1154 13.05 13.7466 13.2028 13.4747 13.4747C13.2028 13.7466 13.05 14.1154 13.05 14.5V15.95C13.05 16.3346 13.2028 16.7034 13.4747 16.9753C13.7466 17.2472 14.1154 17.4 14.5 17.4C14.8846 17.4 15.2534 17.2472 15.5253 16.9753C15.7972 16.7034 15.95 16.3346 15.95 15.95V15.689C16.909 15.341 17.7152 14.6671 18.2276 13.785C18.7401 12.9028 18.9262 11.8687 18.7534 10.8632C18.5807 9.8578 18.06 8.94507 17.2825 8.28459C16.505 7.62412 15.5201 7.25791 14.5 7.25Z" fill="black"/>
</svg>



</div>



</div>
        <div  style={{width: 29, height: 29, marginLeft:20}}>
</div>
        <div style={{color: 'black', fontSize: 28, fontFamily: 'Roboto', fontWeight: '700', marginLeft:34, marginTop:30}}>21 de Fevereiro, Quarta</div>
      
        <div style={{display:'flex', flexDirection:'column', width:"80%", alignItems:'center', justifyContent:'center', marginTop:30,}}>
          
            <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word', marginLeft:80}}>Seg</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word', marginLeft:20}}>Ter</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word', marginLeft:20}}>Qua</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word', marginLeft:20}}>Qui</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word', marginLeft:20}}>Sex</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word', marginLeft:20}}>Sab</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word', marginLeft:20}}>Dom</div>

        </div>

        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:80,marginTop:15}}>28</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>29</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>30</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>31</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>01</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>02</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>03</div>

          </div>

          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:80,marginTop:15}}>04</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>05</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>06</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>07</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>08</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>09</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>10</div>

          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:80,marginTop:15}}>11</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>12</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>13</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>14</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>15</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>16</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>17</div>

          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:80,marginTop:15}}>18</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>19</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>20</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>21</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>22</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>23</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>24</div>

          </div>

          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:80,marginTop:15}}>25</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>26</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>27</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>28</div>
          
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>29</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>01</div>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '300', wordWrap: 'break-word', marginLeft:28,marginTop:15}}>02</div>

          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{color: 'black', fontSize: 28, fontFamily: 'Roboto', fontWeight: '700', marginLeft:-55, marginTop:90}}>Sobre o projeto:</div>
          
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '200', marginLeft:80, marginTop:18, width:370,}}>Projeto de desafio do segundo semestre de Ciência Da Computação da atitus educação </div>
          
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{color: 'black', fontSize: 28, fontFamily: 'Roboto', fontWeight: '700', marginLeft:30, marginTop:150}}>Tecnologias utilizadas:</div>
          
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{color: 'black', fontSize: 18, fontFamily: 'Roboto', fontWeight: '200', marginLeft:-55, marginTop:18, width:370,}}>React, ReactPrime e Figma</div>
          
          </div>
          
        </div>

        
        
    
    </div>
    

 

    
    <div style={{width: 122, height: 242, left: 50, top: 25, position: 'absolute', background: '#c1f5c2', borderRadius: 30}} />
    <div style={{width: 122, height: 940, left: 50, top: 25, position: 'absolute',  background: 'linear-gradient(170deg, #C2FCC0 0%, #DEFDAA 59%, #F2FD9B 100%)', borderTopLeftRadius: 30, borderTopRightRadius: 30}} />
   

    <a href='https://www.linkedin.com/in/lucas-gatica-59665a189/' style={{width: 54, height: 52, left: 84, top: 80, position: 'absolute'}} ><svg width="50" height="50" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4701 -3.5936e-07H1.53006C1.33964 -0.00264498 1.15056 0.0322471 0.973624 0.102683C0.796689 0.17312 0.635362 0.27772 0.498856 0.410512C0.36235 0.543303 0.25334 0.701684 0.178051 0.876609C0.102761 1.05153 0.062667 1.23958 0.0600586 1.43V18.57C0.062667 18.7604 0.102761 18.9485 0.178051 19.1234C0.25334 19.2983 0.36235 19.4567 0.498856 19.5895C0.635362 19.7223 0.796689 19.8269 0.973624 19.8973C1.15056 19.9678 1.33964 20.0026 1.53006 20H18.4701C18.6605 20.0026 18.8496 19.9678 19.0265 19.8973C19.2034 19.8269 19.3648 19.7223 19.5013 19.5895C19.6378 19.4567 19.7468 19.2983 19.8221 19.1234C19.8974 18.9485 19.9375 18.7604 19.9401 18.57V1.43C19.9375 1.23958 19.8974 1.05153 19.8221 0.876609C19.7468 0.701684 19.6378 0.543303 19.5013 0.410512C19.3648 0.27772 19.2034 0.17312 19.0265 0.102683C18.8496 0.0322471 18.6605 -0.00264498 18.4701 -3.5936e-07ZM6.09006 16.74H3.09006V7.74H6.09006V16.74ZM4.59006 6.48C4.17632 6.48 3.77953 6.31564 3.48697 6.02309C3.19442 5.73053 3.03006 5.33374 3.03006 4.92C3.03006 4.50626 3.19442 4.10947 3.48697 3.81691C3.77953 3.52436 4.17632 3.36 4.59006 3.36C4.80975 3.33508 5.03223 3.35685 5.24293 3.42388C5.45363 3.49091 5.6478 3.60169 5.81272 3.74896C5.97763 3.89623 6.10958 4.07668 6.19993 4.27848C6.29027 4.48028 6.33698 4.6989 6.33698 4.92C6.33698 5.1411 6.29027 5.35971 6.19993 5.56152C6.10958 5.76332 5.97763 5.94377 5.81272 6.09104C5.6478 6.23831 5.45363 6.34909 5.24293 6.41612C5.03223 6.48315 4.80975 6.50491 4.59006 6.48ZM16.9101 16.74H13.9101V11.91C13.9101 10.7 13.4801 9.91 12.3901 9.91C12.0527 9.91247 11.7242 10.0183 11.4489 10.2132C11.1735 10.4081 10.9645 10.6827 10.8501 11C10.7718 11.235 10.7379 11.4826 10.7501 11.73V16.73H7.75006C7.75006 16.73 7.75006 8.55 7.75006 7.73H10.7501V9C11.0226 8.52711 11.419 8.13752 11.8965 7.8732C12.374 7.60888 12.9146 7.47985 13.4601 7.5C15.4601 7.5 16.9101 8.79 16.9101 11.56V16.74Z" fill="black"/>
</svg>
</a>

    <h1 style={{width: 54, height: 52, left: 76, top: 820, position: 'absolute', fontSize:22}} >Criado</h1>
    <h1 style={{width: 54, height: 52, left: 76, top: 850, position: 'absolute', fontSize:22}} >Por</h1>
    <h1 style={{width: 54, height: 52, left: 76, top: 880, position: 'absolute', fontSize:22}} >Gatica</h1>

  

    
</div>

    </div>

    
  );
}

export default App;
