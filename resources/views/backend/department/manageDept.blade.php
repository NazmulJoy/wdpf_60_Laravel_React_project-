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

<script>
    $(document).ready(function(){
        $('#btnAdd').click(function(e){
            e.preventDefault();
            alert('Add button clicked');
            let mydata = $('#deptForm').serialize();

           
            $.ajax({url: "{{route('department.store')}}",
            type: 'POST',
            data:(
                "_token": "{{csrf_token()}}",
                "data": mydata
            )
            , success: function(result){
                alert(result);
                // $("#div1").html(result);
            }});

        })
    })
</script>
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
            <div class="col-sm-12">
                <div class="panel panel-default card-view">
                    <div class="panel-heading">
                        <div class="pull-left">
                            @if (@session('msg'))
                                <div class="alert alert-success">{{session('msg')}}</div>
                            @endif
                            
                        </div> <br>

                        <div><button class="alert alert-info" data-toggle="modal" data-target="#responsive-modal">Add Department</button></div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="panel-wrapper collapse in">
                        <div class="panel-body">
                            <div class="table-wrap">
                                <div class="table-responsive">
                                    <table id="example" class="table table-hover display  pb-30" >
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Details</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Specialist Name</th>
                                                <th>Details</th>
                                                <th>Action</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            @foreach ($departments as $item)
                                            <tr>
                                                <th>{{$loop->iteration}}</th>
                                                <th>{{$item->name}}</th>
                                                <th>{{$item->details}}</th>
                                                <th style="width: 30%">
                                                    

                                                    <form action="{{route('department.destroy',$item->id)}}" method="post">
                                                        <a href="{{route('department.show',$item->id)}}" class="btn btn-success">Show</a>
                                                    <a href="{{route('department.edit',$item->id)}}" class="btn btn-info">Edit</a>
                                                        @csrf
                                                        @method('delete')
                                                        <button class='btn btn-danger' type="submit" name="submit">Delete</button>
                                                    </form>

                                                </th>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>
        </div>
        <!-- /Row -->
    </div>
   
                        <!-- sample modal content -->
                        <!-- /.modal -->
                        <div id="responsive-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h5 class="modal-title">Department Form</h5>
                                    </div>
                                    <div class="modal-body">
                                        <form id="deptForm">
                                            <div class="form-group">
                                                <label for="recipient-name" class="control-label mb-10">Department Name:</label>
                                                <input type="text" class="form-control" id="recipient-name" name="name">
                                            </div>
                                            <div class="form-group">
                                                <label for="message-text" class="control-label mb-10">Details:</label>
                                                <textarea class="form-control" id="message-text" name="details"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        <button type="button" id="btnAdd" class="btn btn-danger">Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Button trigger modal -->
                       
@endsection