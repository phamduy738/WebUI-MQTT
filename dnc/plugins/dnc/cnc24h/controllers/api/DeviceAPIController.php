<?php namespace Dnc\Cnc24h\Controllers\API;

use Cms\Classes\Controller;
use BackendMenu;

use Illuminate\Http\Request;
use Dnc\Cnc24h\Helpers\Helpers;
use Illuminate\Support\Facades\Validator;
use Dnc\Cnc24h\Models\Device;
class DeviceAPIController extends Controller
{
	protected $Device;

    protected $helpers;

    public function __construct(Device $Device, Helpers $helpers)
    {
        parent::__construct();
        $this->Device    = $Device;
        $this->helpers          = $helpers;
    }

    public function index(){

        $data = $this->Device->all()->toArray();

        return $this->helpers->apiArrayResponseBuilder(200, 'success', $data);
    }

    public function show($id){

        $data = $this->Device->where('factory_id',$id)->get();

        if( count($data) > 0){

            return $this->helpers->apiArrayResponseBuilder(200, 'success', $data);

        }

        $this->helpers->apiArrayResponseBuilder(400, 'bad request', ['error' => 'invalid key']);

    }

    public function store(Request $request){

    	$arr = $request->all();

        while ( $data = current($arr)) {
            $this->Device->{key($arr)} = $data;
            next($arr);
        }

        $validation = Validator::make($request->all(), $this->Device->rules);
        
        if( $validation->passes() ){
            $this->Device->save();
            return $this->helpers->apiArrayResponseBuilder(201, 'created', ['id' => $this->Device->id]);
        }else{
            return $this->helpers->apiArrayResponseBuilder(400, 'fail', $validation->errors() );
        }

    }

    public function update($id, Request $request){

        $status = $this->Device->where('id',$id)->update($data);
    
        if( $status ){
            
            return $this->helpers->apiArrayResponseBuilder(200, 'success', 'Data has been updated successfully.');

        }else{

            return $this->helpers->apiArrayResponseBuilder(400, 'bad request', 'Error, data failed to update.');

        }
    }

    public function delete($id){

        $this->Device->where('id',$id)->delete();

        return $this->helpers->apiArrayResponseBuilder(200, 'success', 'Data has been deleted successfully.');
    }

    public function destroy($id){

        $this->Device->where('id',$id)->delete();

        return $this->helpers->apiArrayResponseBuilder(200, 'success', 'Data has been deleted successfully.');
    }


    public static function getAfterFilters() {return [];}
    public static function getBeforeFilters() {return [];}
    public static function getMiddleware() {return [];}
    public function callAction($method, $parameters=false) {
        return call_user_func_array(array($this, $method), $parameters);
    }
    
}