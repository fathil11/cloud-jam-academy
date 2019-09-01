<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Participants;
use App\WebAnalytics;

class HomeController extends Controller
{
    public function showHome()
    {
        $this->pushStat();
        return view('app');
    }

    public function registration(Request $request)
    {
        $request->validate([
            'name' => 'required|min:3|max:50',
            'nim' => 'required|min:12|max:18|unique:participants,nim',
            'email' => 'required|email:rfc',
            'phone_number' => 'required|min:5',
            'programing_lang' => 'max:50'
        ]);

        $participant = new Participants();
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

    public function pushStat()
    {
        $client_ip = $this->getUserIpAddr();
        $check = WebAnalytics::where('ip_add', $client_ip)->first();

        if($check == null){
            $web_stat = new WebAnalytics();
            $web_stat->ip_add = $client_ip;
            $web_stat->save();
        }
    }

    public function getUserIpAddr(){
        if(!empty($_SERVER['HTTP_CLIENT_IP'])){
            //ip from share internet
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
            //ip pass from proxy
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        }else{
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        return $ip;
    }
}
