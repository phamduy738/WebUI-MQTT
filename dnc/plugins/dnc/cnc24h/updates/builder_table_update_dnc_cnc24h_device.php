<?php namespace Dnc\Cnc24h\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateDncCnc24hDevice extends Migration
{
    public function up()
    {
        Schema::table('dnc_cnc24h_device', function($table)
        {
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }
    
    public function down()
    {
        Schema::table('dnc_cnc24h_device', function($table)
        {
            $table->dropColumn('created_at');
            $table->dropColumn('updated_at');
        });
    }
}
