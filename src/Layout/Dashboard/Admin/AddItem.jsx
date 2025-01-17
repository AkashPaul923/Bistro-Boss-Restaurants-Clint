import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../Components/Shared/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const imageHostingKey= import.meta.env.VITE_IMAGE_HOSTING_KEY
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`

const AddItem = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        console.log(data)
        const imgFile = { image : data.image[0] }
        const res = await axiosPublic.post(imageHostingAPI, imgFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);
        if(res.data.success){
            // upload data in db
            const menuData = {
                name : data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            }

            const menuRes = await axiosSecure.post('/menu', menuData)
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: `${data.name} added successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset()
            }
        }
    }


  return (
    <div>
        <SectionTitle title='Add An Item' subTitle="Whats's new?"></SectionTitle>
        <div className="flex justify-center items-center my-10">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-2xl">
                {/* Recipe Name */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Recipe name*
                    </label>
                    <input  {...register("name")}  type="text"  placeholder="Recipe name"  className="input input-bordered w-full" required/>
                </div>

                {/* Category and Price */}
                <div className="flex space-x-4 mb-4">
                    <div className="w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Category*
                        </label>
                        <select defaultValue="salad" {...register("category")} className="select select-bordered w-full" required>
                            <option value='salad'>Salad</option>
                            <option value='pizza'>Pizza</option>
                            <option value='soup'>Soup</option>
                            <option value='dessert'>Dessert</option>
                            <option value='drinks'>Drinks</option>
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Price*
                        </label>
                        <input {...register("price")} type="text" placeholder="Price" className="input input-bordered w-full" required/>
                    </div>
                </div>

                {/* Recipe Details */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Recipe Details*
                    </label>
                    <textarea {...register("recipe")} placeholder="Recipe Details" className="textarea textarea-bordered w-full" required/>
                </div>

                {/* File Upload */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Upload Image*
                    </label>
                    <input  {...register("image")} type="file" className="file-input file-input-bordered " required/>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary flex items-center justify-center space-x-2"
                > <FaUtensils className="mr-2" /> <span>Add Item</span>
                </button>
            </form>
        </div>
    </div>
  );
};

export default AddItem;
