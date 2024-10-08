<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function list()
    {
        return Inertia::render('Categories/List', [
            'paginated' => Category::orderBy('created_at', 'desc')->paginate(15),
        ]);
    }

    public function create()
    {
        return Inertia::render('Categories/AddEdit', []);
    }

    public function update(Category $category)
    {
        return Inertia::render('Categories/AddEdit', [
            'category' => $category
        ]);
    }

    public function store(?Category $category = null, CategoryRequest $request)
    {
        $request->updateOrCreate($category);

        return redirect()->route('categories.list')->with('success', 'Category saved successfully');
    }

    public function delete(Category $category)
    {
        $category->delete();

        return redirect()->route('categories.list')->with('success', 'Category deleted successfully');
    }
}
