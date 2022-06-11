import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './CartProduct.scss';

export const SkeletonCartProduct = () => {
    return (
        <div className="Cart flex-column gap-20">
            <Skeleton className='Cart__image'/>
            <div>
                <Skeleton width={170} className='Cart__title'/>
                <Skeleton width={150} className='Cart__title'/>
            </div>

            <div className="flex-row-betw">
                <Skeleton height={30} width={100}/>
                
            </div>
        </div>
    )
}