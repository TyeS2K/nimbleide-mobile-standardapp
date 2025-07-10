#!/usr/bin/perl --

use strict;
use Switch;
use CGI::Carp qw(fatalsToBrowser);
use CGI qw(:standard);

$| = 1;

print "Status: 200 OK\n";
print "Access-Control-Allow-Origin: *\n";
print "Content-type: text/plain; charset=utf-8\n\n";

my $cmd = param("tCMD");

switch ($cmd)
	{
	case ("IP") 
		{ 
		print "$ENV{'REMOTE_ADDR'}\r\nOK\<BR>"; 
		}
	case ("NUM") 
		{ 
		my $range = param("tRANGE");
		my $rnum = int($range * rand());
		print "$rnum\r\nOK\<BR>"; 
		}
	case ("NUMARRAY")
		{
		my $range = int(param("tRANGE"));
		my $max = int(param("tCOUNT"));
		my $count = 0;
		my $retval = "";
		if ($range < 1) { $range = 100; }
		
		for ($count = 1; $count <= $max; $count++) {
			my $rnum = int($range * rand());
			if ($count > 1) {
				print ",".$rnum;
			}
			else {
				print $rnum;
			}
		}
		print "\r\nOK\<BR>"; 
		}
	case ("LIST")
		{
		my $max = int(param("tCOUNT"));
		my $count = 0;
		my $retval = "";
		if ($max < 1) { $max = 25; }
		
		for ($count = 1; $count <= $max; $count++) {
			print "ListItem $count\r\n";
		}
		print "OK\<BR>"; 
		}
	}

