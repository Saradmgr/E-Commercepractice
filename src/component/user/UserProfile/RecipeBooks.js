import React from 'react'
import { DeleteFilled, HeartOutlined, MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons'
import { Button, Card } from 'antd'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { updateCard } from '../../../redux/slices/AddToCart';
import { updateCart } from '../../../redux/slices/Favourite';
const RecipeBooks = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const carddata = useSelector((state) => state)
    console.log("carddata", carddata)
    const [orderdata, setOrderData] = React.useState([])
    const handleDelete = (label) => {
        dispatch(updateCard(carddata?.addToCart?.data?.filter((item) => item.label !== label)))
    }
    React.useEffect(() => {
        setOrderData(carddata?.addToCart?.data)
    }, [carddata?.addToCart?.data])

    console.log("asdsadsadasd", carddata?.addToCart)
    const handleDetails = (recipe) => {
        navigate(`/details/${recipe.label}`);
    };
    const Favourite = (item) => {
        const existingItemIndex = carddata?.favourite?.data.findIndex((cartItem) => cartItem.label === item?.label);
        if (existingItemIndex === -1) {
            const updatedItem = { ...item?.recipe };
            dispatch(updateCart([...carddata?.favourite?.data, updatedItem]));
        }
    };
    console.log("sdadsadasd",carddata?.favourite?.data)
    return (
        <div>
            <div className="grid grid-cols-12 grid-flow-row gap-4">
                {
                    carddata?.addToCart?.data?.map((item, index) => (
                        <div key={item.index} className="md:col-span-3"  >
                            <div>
                                <Card
                                    hoverable
                                    style={{
                                        width: 240,
                                        top: 0,
                                        left: 0,
                                        transition: 'yellow 0.3s ease',
                                    }}
                                    cover={<img alt={item.label} src={item.image} />}
                                >
                                    <div className="h-30" >
                                        <div className="h-30" onClick={() => handleDetails(item)}>
                                            <div className="font-extrabold">
                                                {item?.label}
                                            </div>
                                        </div>
                                        <div>
                                            <DeleteFilled onClick={() => handleDelete(item?.label)} />
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default RecipeBooks