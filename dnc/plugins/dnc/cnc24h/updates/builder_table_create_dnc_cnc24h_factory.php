<?php namespace Dnc\Cnc24h\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateDncCnc24hFactory extends Migration
{
    public function up()
    {
        Schema::create('dnc_cnc24h_factory', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('name');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('dnc_cnc24h_factory');
    }
}
