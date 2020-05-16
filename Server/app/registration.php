<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class registration extends Model
{
    //
     protected $fillable = [
      'user_email', 'institution', 'hash_password', 'first_name', 'last_name', 
    ];
}
