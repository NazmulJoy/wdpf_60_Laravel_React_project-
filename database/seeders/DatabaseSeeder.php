<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Specialist::factory(10)->create();

        \App\Models\Admin::create([
            'name' => 'Admin',
            'email' => 'nazmuljoys@gmail.com',
            'password' => Hash::make('admin123')
        ]);
        \App\Models\Doctor::create([
            'name' => 'Doctor',
            'email' => 'nazmuljoys@gmail.com',
            'password' => Hash::make('admin123'),
            'specialist_id' => '1',
            'photo' =>'images/nophoto.jpg',
            'status' => 'active'
        ]);
       

        \App\Models\Specialist::factory(10)->create();
    }

}
