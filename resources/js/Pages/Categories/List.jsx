import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ContentLayout from "@/Layouts/ContentLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function List({ auth, categories }) {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this category?")) {
            router.delete(route("categories.delete", id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Categories" />

            <ContentLayout>
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl">Categories</h1>
                    <Link
                        href={route("categories.create")}
                        className="flex items-center transition ease-in-out duration-100 text-black border border-zinc-700 rounded-xl py-2 px-3 font-bold cursor-pointer tracking-wider border-transparent hover:bg-zinc-700 hover:text-white"
                    >
                        Create Category
                    </Link>
                </div>

                <div className="mt-6">
                    <div className="grid grid-cols-4">
                        <div className="w-1/4">
                            <h2 className="font-bold mb-9">ID</h2>
                        </div>
                        <div className="w-1/4">
                            <h2 className="font-bold mb-9">Name</h2>
                        </div>
                        <div className="w-1/4">
                            <h2 className="font-bold mb-9">Order</h2>{" "}
                        </div>
                        <div className="w-1/4">
                            <h2 className="font-bold mb-9">Actions</h2>
                        </div>

                        {categories.map((category, index) => {
                            return (
                                <Fragment key={index}>
                                    <div className="w-1/4 flex items-center">
                                        <div className=" mb-2">
                                            {category.id}
                                        </div>
                                    </div>
                                    <div className="w-1/4 flex items-center text-nowrap">
                                        <div className="mb-2 ">
                                            {category.name}
                                        </div>
                                    </div>
                                    <div className="w-1/4 flex items-center">
                                        <div className=" mb-2">
                                            {category.order}
                                        </div>
                                    </div>
                                    <div className="w-1/4 flex items-center">
                                        <div className="mb-2 flex gap-6">
                                            <Link
                                                href={route(
                                                    "categories.update",
                                                    [category.id]
                                                )}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPencil}
                                                    className="cursor-pointer hover:text-blue-500 hover:scale-125"
                                                />
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDelete(category.id)
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                    className="cursor-pointer hover:text-red-500 hover:scale-125"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </Fragment>
                            );
                        })}
                    </div>
                </div>
            </ContentLayout>
        </AuthenticatedLayout>
    );
}
