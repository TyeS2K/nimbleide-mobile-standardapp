#!/usr/bin/perl --

use strict;
use Switch;
use CGI::Carp qw(fatalsToBrowser);
use CGI qw(:standard);
use SvrHash;

my $mnupath = "(j32)/menus/";
my $iconpath = "(j32)/db/";
my $dbpath = "(j32)/";

my $uid = param("uid");
my $eml = param("eml");
my $cmd = param("cmd");
my $svr = "";

my $chkEmail = "";
my $chkServer = "";

## Determine server referrer
## ---------------------------
my $referer = $ENV{'HTTP_REFERER'}; 
my $homeurl = "http://$ENV{'HTTP_HOST'}";

sub resolveServer {
    my($inSvr) = @_;
    my @ary = split("//", $inSvr);  
    my @domain = split("/", $ary[1]); 
	my $prefix = lc substr $domain[0], 0, 3;
	
	if ($prefix eq "www") {
		return $domain[0];
	} else { return "www.".$domain[0]; }
}

sub ShowMenu {
    my($path,$mnu) = @_;
	my $line;
	
	$| = 1;
	print "Status: 200 OK\n";
	print "Access-Control-Allow-Origin: *\n";
	print "Content-type: text/plain; charset=utf-8\n\n";

	my $filename = $path.$mnu.".db";
    if ( -e $filename )
        {
        open ( UL, $filename ) || die;
           while ( defined ($line = <UL>) )
           {
                chomp($line);
				print $line."\n";
           }
        close(UL);
		print "[OK]:<BR>";
        }
}


switch ($cmd)
{
	case ("menu") {
		ShowMenu($mnupath, "menus");
		}
	case ("icons") {
		ShowMenu($iconpath, "icons");
		}
}

