import { useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import { deleteCart, getCart, updateCart } from "../api/firebase";
import { useAuthContext } from "./AuthContext";


export default function useCart(){
    const {uid} = useAuthContext();
    console.log(uid);

    //useQueryClient : React에서 데이터를 가져오고 업데이트하는 라이브러리의 일종
    //yarn add @tanstack/react-query
    const queryClient = useQueryClient();

    const cartInfo = useQuery({ //카트에 데이터를 가져오는 비동기 쿼리 설정
        queryKey : ['cart', uid || ''], //쿼리를 식별하는 키
        queryFn: ()=>getCart(uid), //데이터를 가져오는 함수
        enabled : !!uid //쿼리의 활성화 되어야 하는지 여부
    })

    //'cart', uid || ''
    

    const addItemCart = useMutation({
            mutationFn : (product)=>updateCart(uid,product),
            onSuccess : ()=>{ //onSuccess : 완료가 되고 난 후 실행
                queryClient.invalidateQueries(['cart',uid])
                //최신 상태로 업데이트(쿠키값을 무효화 시켜 상품의 정보를 최신으로 업데이트)
            }
        });
    //useMutation : 정보를 업데이트할때 사용하는 구문

    const removeCart = useMutation({
        mutationFn : (id)=>deleteCart(uid,id),
        onSuccess:()=>{
            queryClient.invalidateQueries(['cart',uid])
        }
    })
    return {cartInfo,addItemCart,removeCart}
}