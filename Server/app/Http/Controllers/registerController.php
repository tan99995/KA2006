<?php

namespace App\Http\Controllers;

use App\Registration;

use Illuminate\Http\Request;

class registerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $registration = Registration::orderBy('user_ID','desc') -> get();
        return response()->json($registration);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $register = new Registration;
      $register->user_email = $request->user_email;
         $register->institution = $request->institution;
        $register->hash_password = $request->hash_password;
        $register->first_name = $request->first_name;
        $register->last_name = $request->last_name;
       
        $register->save();
        return response()->json($register);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $register = Registration::findOrFail($id);
        return response()->json($register);

    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $register = Registration::findOrFail($id);
        $register->user_email = $request->user_email;
         $register->institution = $request->institution;
        $register->hash_password = $request->hash_password;
        $register->first_name = $request->first_name;
        $register->last_name = $request->last_name;
         $register->save();
        return response()->json($register);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
         $register = Registration::findOrFail($id);
         $register->delete();
         return response()->json($register);
    }
}
