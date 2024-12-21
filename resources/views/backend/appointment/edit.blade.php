@extends('backend.layouts.app')

@section('css')
<link rel="shortcut icon" href="favicon.ico">
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="http://www.datatables.net/rss.xml">
<link href="{{asset('vendors/bower_components/datatables/media/css/jquery.dataTables.min.css')}}" rel="stylesheet" type="text/css"/>
<link href="{{asset('dist/css/style.css')}}" rel="stylesheet" type="text/css">
@endsection
@section('js')
<script src="{{asset('vendors/bower_components/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/datatables/media/js/jquery.dataTables.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/datatables.net-buttons/js/dataTables.buttons.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/datatables.net-buttons/js/buttons.flash.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/jszip/dist/jszip.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/pdfmake/build/pdfmake.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/pdfmake/build/vfs_fonts.js')}}"></script>
<script src="{{asset('vendors/bower_components/datatables.net-buttons/js/buttons.html5.min.js')}}"></script>
<script src="{{asset('vendors/bower_components/datatables.net-buttons/js/buttons.print.min.js')}}"></script>
<script src="{{asset('dist/js/export-table-data.js')}}"></script>
<script src="{{asset('dist/js/jquery.slimscroll.js')}}"></script>
<script src="{{asset('dist/js/dropdown-bootstrap-extended.js')}}"></script>
<script src="{{asset('dist/js/init.js')}}"></script>
@endsection
@section('content')
    <h1>All Specialist</h1>
    <div class="container-fluid">
				
        <!-- Title -->
        <div class="row heading-bg bg-green">
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h5 class="txt-light">Export</h5>
            </div>
            <!-- Breadcrumb -->
            <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
              <ol class="breadcrumb">
                <li><a href="index.html">Dashboard</a></li>
                <li><a href="#"><span>table</span></a></li>
                <li class="active"><span>Export</span></li>
              </ol>
            </div>
            <!-- /Breadcrumb -->
        </div>
        <!-- /Title -->
        
        <!-- Row -->
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <div class="pull-left">
                            <h6 class="panel-title txt-dark">Edit Doctor Form</h6>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="panel-wrapper collapse in">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-sm-12 col-xs-12">
                                    <div class="form-wrap">
                                        <form class="form-horizontal" action="{{route('frontappointment.store')}}" method="post">
                                            @csrf
                                            <div class="form-group">
                                                <label for="exampleInputuname_4" class="col-sm-3 control-label"> Name*</label>
                                                <div class="col-sm-9">
                                                    <div class="input-group">
                                                        <input type="text" name="name" value="{{old('name')??$appointment->name}}" class="form-control" id="exampleInputuname_4" placeholder="Name of patient">
                                                        <div class="input-group-addon"><i class="icon-user"></i></div>
                                                    </div>
                                                    @error('name')
                                                        <div class="alert alert-danger">{{$message}}</div>
                                                        @enderror
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail_4" class="col-sm-3 control-label">Email*</label>
                                                <div class="col-sm-9">
                                                    <div class="input-group">
                                                        <input type="email" name="email" value="{{old('email')??$appointment->email}}" class="form-control" id="exampleInputuname_4" placeholder="Email of patient">
                                                        
                                                        <div class="input-group-addon"><i class="icon-envelope"></i></div>
                                                    </div>
                                                    @error('email')
                                                        <div class="alert alert-danger">{{$message}}</div>
                                                        @enderror
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail_4" class="col-sm-3 control-label">Phone*</label>
                                                <div class="col-sm-9">
                                                    <div class="input-group">
                                                        <input type="text" name="phone" value="{{old('phone')??$appointment->phone}}" class="form-control" id="exampleInputuname_4" placeholder="Phone of patient">
                                                        
                                                        <div class="input-group-addon"><i class="icon-envelope"></i></div>
                                                    </div>
                                                    @error('phone')
                                                        <div class="alert alert-danger">{{$message}}</div>
                                                        @enderror
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputuname_4" class="col-sm-3 control-label">Doctor*</label>
                                                <div class="col-sm-9">
                                                    
                                                        <select name="doctor" class="form-control" id="">
                                                            <option value="">Select one</option>
                                                            @foreach ($doctors as $doctor)
                                                            <option value="{{$doctor->id}}" @selected(old('doctor')??$doctor->id==$doctor->id)>{{$doctor->name}} || {{$doctor->specialist->name}}</option>
                                                            
                                                           
                                                            @endforeach
                                                        </select>
                                                        @error('doctor')
                                                        <div class="alert alert-danger">{{$message}}</div>
                                                        @enderror
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail_4" class="col-sm-3 control-label">Date*</label>
                                                <div class="col-sm-9">
                                                    <div class="input-group">
                                                        <input type="date" name="date" value="{{old('date')??$appointment->date}}" class="form-control" id="exampleInputuname_4">
                                                        
                                                        <div class="input-group-addon"><i class="icon-envelope"></i></div>
                                                    </div>
                                                    @error('date')
                                                        <div class="alert alert-danger">{{$message}}</div>
                                                        @enderror
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputEmail_4" class="col-sm-3 control-label">Remarks*</label>
                                                <div class="col-sm-9">
                                                    <div class="input-group">
                                                        <input type="text" name="remarks" value="{{old('remarks')??$appointment->remarks}}" class="form-control" id="exampleInputuname_4" placeholder="Remarks of patient">
                                                        
                                                        <div class="input-group-addon"><i class="icon-envelope"></i></div>
                                                    </div>
                                                    @error('remarks')
                                                        <div class="alert alert-danger">{{$message}}</div>
                                                        @enderror
                                                </div>
                                            </div>
                                            <div class="form-group mb-0">
                                                <div class="col-sm-offset-3 col-sm-9">
                                                    <button type="submit" class="btn btn-info ">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>
        </div>
        <!-- /Row -->
    </div>
@endsection