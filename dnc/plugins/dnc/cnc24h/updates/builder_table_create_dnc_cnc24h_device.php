<?php namespace Dnc\Cnc24h\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateDncCnc24hDevice extends Migration
{
    public function up()
    {
        Schema::create('dnc_cnc24h_device', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name');
            $table->string('serial');
            $table->string('status');
            $table->string('factory_id');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('dnc_cnc24h_device');
    }
}
