import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchSearchProducts } from '../../services/Allproduct';
import { Card } from 'antd';
import GoBack from '../GoBack';
const Details = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const { data, loading } = useSelector((state) => state.detailsfetch);
    React.useEffect(() => {
        dispatch(fetchSearchProducts(`${params.label}`))
    }, [dispatch, params.label])
    const datas = [data[0]?.recipe]
    console.log("orders", data)
    return (
        <div >
            <Card>
                <div className="grid md:grid-cols-12 grid-flow-row h-auto">
                    <div className="md:col-span-6 md:ml-[10rem]">
                        <div className=" max-h-25">
                            <div>
                                <img src={data[0]?.recipe?.image} className="h-30" alt='gg' />
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-6 grid gap-2">
                        <div className="font-extrabold underline">
                            {data[0]?.recipe?.label}
                        </div>
                        <div className="flex">
                            <div className="">
                                <div className="font-bold">
                                    Recipe:
                                </div>
                                <div className="font-semibold">
                                    {data[0]?.recipe?.ingredients.map((ingredient, index) => (
                                        <div key={index}>
                                            <div>
                                                Step {index + 1}: {ingredient.text}
                                            </div>
                                            <div>
                                                (Quantity:{ingredient.quantity}, Food:{ingredient.food}, Weight:{ingredient.weight?.toFixed(3)})
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <div className='grid md:grid-cols-12 grid-flow-row h-auto'>
                <div className='md:col-span-4 md:ml-[10rem]'>
                    <div className="font-bold underline">
                        Health Labels
                    </div>
                    <div className="font-semibold flex flex-wrap">
                        {data[0]?.recipe?.healthLabels.map(healthLabels => (
                            <div key={healthLabels} className="mr-2 mb-2">{healthLabels},</div>
                        ))}
                    </div>
                </div>
                <div className='md:col-span-4 md:ml-[10rem]'>
                    <div className="font-bold underline">
                        Meal Type
                    </div>
                    <div className="font-semibold">
                        <li>{data[0]?.recipe?.mealType}</li>
                    </div>
                    <div className="font-bold underline">
                        Cusine Type
                    </div>
                    <div className="font-semibold">
                        <li>{data[0]?.recipe?.cuisineType}</li>
                    </div>
                    <div className="font-bold underline">
                        Diet Labels
                    </div>
                    <div className="font-semibold">
                        <li>{data[0]?.recipe?.dietLabels}</li>
                    </div>
                    <div className="font-bold underline">
                        Dish Type
                    </div>
                    <div className="font-semibold">
                        <li>{data[0]?.recipe?.dishType}</li>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Details;