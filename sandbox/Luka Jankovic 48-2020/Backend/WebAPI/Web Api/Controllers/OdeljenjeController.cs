using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Web_Api.Models;

namespace Web_Api.Controllers
{
    public class OdeljenjeController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"select OdeljenjeId,OdeljenjeIme from dbo.Odeljenje";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ZaposleniApp"].ConnectionString))
            using (var cmd = new SqlCommand(query, con)) 
            using(var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table); 
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(Odeljenje o)
        {
            try
            {
                string query = @"insert into dbo.Odeljenje values 
                               ('" + o.OdeljenjeIme + @"')
                               ";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ZaposleniApp"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Dodato uspesno!";

            }catch(Exception e)
            {
                return "2";
            }
            
        }

        public string Put(Odeljenje o)
        {
            try
            {
                string query = @"update Odeljenje set OdeljenjeIme='"+o.OdeljenjeIme+@"' where OdeljenjeId="+o.OdeljenjeId+@"";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ZaposleniApp"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Update-ovano uspesno!";
            }
            catch (Exception e)
            {
                return "Neuspesno update-ovanje!";
            }

        }

        public string Delete(int id)
        {
            try
            {
                string query = @"delete from Odeljenje where OdeljenjeId=" + id + @"";
                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["ZaposleniApp"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Uspesno izbrisano!";
            }
            catch (Exception e)
            {
                return "Neuspesno izbrisano!";
            }

        }


    }
}
