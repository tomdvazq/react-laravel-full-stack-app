<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use Illuminate\Auth\Events\Logout;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function login(LoginRequest $request) {
        
    }

    public function signup(SignUpRequest $request) {

    }

    public function logout(Logout $request) {

    }
}
