<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Participants;
use App\WebAnalytics;

class HomeController extends Controller
{
    public function showHome()
    {
        return view('app');
    }

    public function registration(Request $request)
    {
        $request->validate([
            'name' => 'required|max:50|unique:participants,nim',
            'nim' => 'required|max:18',
            'email' => 'required',
            'phone_number' => 'required',
            'programing_lang' => 'max:50'
        ]);

        $participant = new Participants;
        $participant->name = $request->name;
        $participant->nim = $request->nim;
        $participant->email = $request->email;
        $participant->phone_number = $request->phone_number;
        $participant->know_scale = $request->know_scale;
        $participant->programing_lang = $request->programing_lang;

        if($participant->save()){
            $request->session()->put('done', 1);
            return redirect(url('final'));
        }
    }

    public function showFinal(Request $request)
    {
        if($request->session()->has('done')){
            $request->session()->pull('done', 1);
            return view('finally');
        }else{
            return abort(404);
        }
    }
}
